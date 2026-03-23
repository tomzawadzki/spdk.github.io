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

	# Save tracked files we need to overwrite for the Doxygen build so
	# that an external --spdk-path checkout is left clean afterwards.
	local tmpdir
	tmpdir=$(mktemp -d)
	cp "$repo/doc/header.html" "$tmpdir/"
	cp "$repo/doc/footer.html" "$tmpdir/"
	cp "$repo/doc/Doxyfile" "$tmpdir/"

	# Build Doxygen header by concatenating: doc <head> template + <body>
	# opener + static navbar. No Jekyll build required -- the navbar is
	# plain HTML with root-relative paths and JS-based active highlighting.
	{
		cat "$rootdir/_partials/doc_head.html"
		printf '<body>\n<div id="top"><!-- do not remove this div, it is closed by doxygen! -->\n'
		cat "$rootdir/_includes/navbar.html"
	} > "$repo/doc/header.html"

	cp "$rootdir/_partials/doc_footer.html" "$repo/doc/footer.html"

	sed -i 's/^DISABLE_INDEX.*/DISABLE_INDEX          = YES/' "$repo/doc/Doxyfile"

	(cd "$repo/doc"; make clean; make)

	mkdir -p "$rootdir/doc"
	rm -rf "$rootdir/doc/"*
	cp -R "$repo/doc/output/html/"* "$rootdir/doc"

	# Restore originals and remove build artifacts from the spdk repo
	mv "$tmpdir/header.html" "$repo/doc/header.html"
	mv "$tmpdir/footer.html" "$repo/doc/footer.html"
	mv "$tmpdir/Doxyfile" "$repo/doc/Doxyfile"
	(cd "$repo/doc"; make clean)
	rm -rf "$tmpdir"
}
