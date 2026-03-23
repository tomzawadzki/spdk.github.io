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
	local rootdir=$(readlink -f "$(dirname $0)")

	# The spdk repo Doxyfile leaves HTML_HEADER / HTML_FOOTER blank so
	# standalone builds use Doxygen defaults.  We generate the website
	# versions here and point the Doxyfile at them for this build only.
	local saved_doxyfile
	saved_doxyfile=$(mktemp)
	cp "$repo/doc/Doxyfile" "$saved_doxyfile"

	{
		cat "$rootdir/_partials/doc_head.html"
		printf '<body>\n<div id="top"><!-- do not remove this div, it is closed by doxygen! -->\n'
		cat "$rootdir/_includes/navbar.html"
	} > "$repo/doc/header.html"

	cp "$rootdir/_partials/doc_footer.html" "$repo/doc/footer.html"

	sed -i \
		-e 's/^HTML_HEADER.*/HTML_HEADER            = header.html/' \
		-e 's/^HTML_FOOTER.*/HTML_FOOTER            = footer.html/' \
		-e 's/^DISABLE_INDEX.*/DISABLE_INDEX          = YES/' \
		"$repo/doc/Doxyfile"

	(cd "$repo/doc"; make clean; make)

	mkdir -p "$rootdir/doc"
	rm -rf "$rootdir/doc/"*
	cp -R "$repo/doc/output/html/"* "$rootdir/doc"

	# Restore Doxyfile and remove generated files so the spdk repo
	# stays clean (header.html / footer.html are in .gitignore).
	mv "$saved_doxyfile" "$repo/doc/Doxyfile"
	rm -f "$repo/doc/header.html" "$repo/doc/footer.html"
	(cd "$repo/doc"; make clean)
}
