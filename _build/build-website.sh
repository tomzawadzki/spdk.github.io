#!/usr/bin/env bash
# Build the SPDK website: generate Doxygen docs, then run Jekyll.
#
# Modes:
#   (default)       Full build -- Doxygen + Jekyll, output in _site/
#   --serve         Local development with livereload at http://localhost:4000
#   --spdk-path DIR Use a local spdk checkout instead of cloning from GitHub
#   --baseurl URL   Override Jekyll baseurl (e.g. /spdk.github.io for forks)

set -xe

rootdir=$(readlink -f "$(dirname "$0")/..")
repo="$rootdir/spdk"

mode=build
spdk_path=""
baseurl=""
while [[ $# -gt 0 ]]; do
	case "$1" in
		--serve)  mode=serve ;;
		--spdk-path) spdk_path="$2"; shift ;;
		--baseurl) baseurl="$2"; shift ;;
	esac
	shift
done

if [[ -n "$spdk_path" ]]; then
	repo=$(readlink -f "$spdk_path")
else
	rm -rf "$repo"
	git clone --depth 1 https://github.com/spdk/spdk "$repo"
fi

# Build Doxygen docs
doc_version=$(cd "$repo"; git rev-parse --short=9 HEAD)
site_version=$(cd "$rootdir"; git rev-parse --short=9 HEAD)

tmpdir=$(mktemp -d)
trap 'rm -rf "$tmpdir"' EXIT

{
	sed 's|{{ site.baseurl }}|..|g' "$rootdir/_doxygen/doc_head.html"
	printf '<body>\n<div id="top"><!-- do not remove this div, it is closed by doxygen! -->\n'
	sed 's|{{ site.baseurl }}|..|g' "$rootdir/_includes/navbar.html"
	printf '<div id="doxygen-searchbox">$searchbox</div>\n'
} > "$tmpdir/header.html"

{
	sed -e 's|{{ site.baseurl }}|..|g' \
		-e "s|{% if site.data.versions %}||" \
		-e "s|{{ site.data.versions.spdk_sha }}|$doc_version|" \
		-e "s|{{ site.data.versions.site_sha }}|$site_version|" \
		-e "s|{% endif %}||" \
		"$rootdir/_includes/footer.html"
	grep '<script' "$repo/doc/theme/footer.html"
	printf '</body>\n</html>\n'
} > "$tmpdir/footer.html"

cat > "$tmpdir/Doxyfile.website" <<-EOF
	@INCLUDE = $repo/doc/Doxyfile
	HTML_HEADER = $tmpdir/header.html
	HTML_FOOTER = $tmpdir/footer.html
	HTML_EXTRA_STYLESHEET = $repo/doc/theme/spdk.css
EOF

(cd "$repo/doc"; make clean; make DOXYFILE="$tmpdir/Doxyfile.website")

mkdir -p "$rootdir/doc"
rm -rf "$rootdir"/doc/*
cp -R "$repo/doc/output/html"/* "$rootdir"/doc/
(cd "$repo/doc"; make clean)

[[ -z "$spdk_path" ]] && rm -rf "$repo"

# Write version stamps for Jekyll (footer reads _data/versions.yml)
mkdir -p "$rootdir/_data"
cat > "$rootdir/_data/versions.yml" <<-EOF
	spdk_sha: "$doc_version"
	site_sha: "$site_version"
EOF

# Build Jekyll website
case "$mode" in
	serve)
		jekyll_args=(--livereload)
		[[ -n "$baseurl" ]] && jekyll_args+=(--baseurl "$baseurl")
		(cd "$rootdir"; bundle exec jekyll serve "${jekyll_args[@]}")
		;;
	*)
		jekyll_args=()
		[[ -n "$baseurl" ]] && jekyll_args+=(--baseurl "$baseurl")
		(cd "$rootdir"; bundle exec jekyll build "${jekyll_args[@]}")
		echo "Site built to $rootdir/_site/"
		;;
esac
