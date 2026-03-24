check_clone_repo() {
	local repo=$1
	if [[ ! -d "$repo" ]]; then
		git clone --depth 1 https://github.com/spdk/spdk "$repo"
	fi
}

remove_repo() {
	local repo=$1
	rm -rf "$repo"
}

regenerate_docs() {
	local repo=$(readlink -f "$1")
	local rootdir=$(readlink -f "$(dirname $0)/..")

	# Build website-flavoured Doxygen output.  All temporary files
	# (overlay Doxyfile, header, footer) live in a temp directory
	# outside the repo so nothing inside $repo is ever modified.
	local tmpdir
	tmpdir=$(mktemp -d)
	trap 'rm -rf "$tmpdir"' RETURN

	{
		cat "$rootdir/_doxygen/doc_head.html"
		printf '<body>\n<div id="top"><!-- do not remove this div, it is closed by doxygen! -->\n'
		cat "$rootdir/_includes/navbar.html"
	} > "$tmpdir/header.html"

	{
		cat "$rootdir/_includes/footer.html"
		cat "$rootdir/_doxygen/doc_footer.html"
	} > "$tmpdir/footer.html"

	cat > "$tmpdir/Doxyfile.website" <<-EOF
		@INCLUDE = $repo/doc/Doxyfile
		HTML_HEADER = $tmpdir/header.html
		HTML_FOOTER = $tmpdir/footer.html
	EOF

	(cd "$repo/doc"; make clean; make DOXYFILE="$tmpdir/Doxyfile.website")

	mkdir -p "$rootdir/doc"
	rm -rf "$rootdir/doc/"*
	cp -R "$repo/doc/output/html/"* "$rootdir/doc"

	(cd "$repo/doc"; make clean)
}
