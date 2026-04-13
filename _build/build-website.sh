#!/usr/bin/env bash
# Build the SPDK website: generate Doxygen docs, then run Jekyll.

set -euo pipefail

readonly REQUIRED_DOXYGEN_VERSION=1.17.0

function usage() {
	cat <<-EOF
		Usage: ${0##*/} [options]

		  --serve           Start Jekyll with live reload after generating docs
		  --spdk-path DIR   Use a local SPDK checkout instead of cloning one
		  --baseurl PATH    Override Jekyll baseurl (for example /spdk.github.io)
		  --url URL         Override Jekyll site.url
		  -h, --help        Show this help
	EOF
}

function die() {
	echo "ERROR: $*" >&2
	exit 1
}

function require_value() {
	(($# >= 2)) || die "$1 requires a value"
	[[ -n $2 ]] || die "$1 requires a non-empty value"
}

rootdir=$(readlink -f "$(dirname "$0")/..")
mode=build
spdk_path=
baseurl=
site_url=

while (($# > 0)); do
	case "$1" in
		--serve)
			mode=serve
			;;
		--spdk-path)
			require_value "$@"
			spdk_path=$2
			shift
			;;
		--baseurl)
			require_value "$@"
			baseurl=$2
			shift
			;;
		--url)
			require_value "$@"
			site_url=$2
			shift
			;;
		-h | --help)
			usage
			exit 0
			;;
		*)
			die "unknown option: $1"
			;;
	esac
	shift
done

[[ -z $baseurl || $baseurl =~ ^(/[A-Za-z0-9._~-]+)+$ ]] ||
	die "--baseurl must be a URL path without a trailing slash"
[[ -z $site_url || $site_url =~ ^https?://[A-Za-z0-9.-]+(:[0-9]+)?$ ]] ||
	die "--url must contain only an HTTP(S) scheme and host"

tmpdir=$(mktemp -d)
repo=
doc_build_started=false

function cleanup() {
	local rc=$?

	if [[ $doc_build_started == true && -n $repo && -d $repo/doc ]]; then
		make -C "$repo/doc" clean >/dev/null 2>&1 || true
	fi
	rm -rf "$tmpdir"
	exit "$rc"
}
trap cleanup EXIT

if [[ -n $spdk_path ]]; then
	repo=$(readlink -f "$spdk_path")
	[[ -e $repo/.git && -f $repo/doc/Doxyfile ]] ||
		die "--spdk-path is not an SPDK checkout: $spdk_path"
else
	repo=$tmpdir/spdk
	git clone --depth 1 https://github.com/spdk/spdk "$repo"
fi

installed_doxygen=$(doxygen --version)
installed_doxygen=${installed_doxygen%% *}
[[ $installed_doxygen == "$REQUIRED_DOXYGEN_VERSION" ]] ||
	die "Doxygen $REQUIRED_DOXYGEN_VERSION is required (found $installed_doxygen)"

doc_version=$(git -C "$repo" rev-parse --short=9 HEAD)
site_version=$(git -C "$rootdir" rev-parse --short=9 HEAD)

{
	sed 's|{{ site.baseurl }}|..|g' "$rootdir/_doxygen/doc_head.html"
	printf '<body>\n<div id="top"><!-- do not remove this div, it is closed by doxygen! -->\n'
	sed -e 's|{{ site.baseurl }}|..|g' \
		-e "s|<!-- DOXYGEN_SEARCH -->|<div id=\"doxygen-searchbox\">\$searchbox</div>|" \
		"$rootdir/_includes/navbar.html"
} > "$tmpdir/header.html"

{
	sed -e 's|{{ site.baseurl }}|..|g' \
		-e "s|{% if site.data.versions %}||" \
		-e "s|{{ site.data.versions.spdk_sha }}|$doc_version|" \
		-e "s|{{ site.data.versions.site_sha }}|$site_version|" \
		-e "s|{% endif %}||" \
		"$rootdir/_includes/footer.html"
	printf '</body>\n</html>\n'
} > "$tmpdir/footer.html"

cat > "$tmpdir/Doxyfile.website" <<-EOF
	@INCLUDE = "$repo/doc/Doxyfile"
	HTML_HEADER = "$tmpdir/header.html"
	HTML_FOOTER = "$tmpdir/footer.html"
	HTML_EXTRA_STYLESHEET = "$repo/doc/theme/spdk.css"
EOF

doc_build_started=true
make -C "$repo/doc" clean
make -C "$repo/doc" DOXYFILE="$tmpdir/Doxyfile.website"

rm -rf "$rootdir/doc"
mkdir -p "$rootdir/doc"
cp -a "$repo/doc/output/html/." "$rootdir/doc/"
make -C "$repo/doc" clean
doc_build_started=false

mkdir -p "$rootdir/_data"
cat > "$rootdir/_data/versions.yml" <<-EOF
	spdk_sha: "$doc_version"
	site_sha: "$site_version"
EOF

jekyll_args=()
if [[ -n $baseurl || -n $site_url ]]; then
	{
		[[ -n $baseurl ]] && printf 'baseurl: "%s"\n' "$baseurl"
		[[ -n $site_url ]] && printf 'url: "%s"\n' "$site_url"
	} > "$tmpdir/jekyll-overrides.yml"
	jekyll_args+=(--config "$rootdir/_config.yml,$tmpdir/jekyll-overrides.yml")
fi

if [[ $mode == serve ]]; then
	(cd "$rootdir"; bundle exec jekyll serve --livereload "${jekyll_args[@]}")
else
	(cd "$rootdir"; bundle exec jekyll build "${jekyll_args[@]}")
	echo "Site built to $rootdir/_site/"
fi
