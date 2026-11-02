#!/usr/bin/env bash
# Build the SPDK website into _site/. Doxygen builds the SPDK docs first,
# then Jekyll builds the pages.

set -euo pipefail

readonly REQUIRED_DOXYGEN_VERSION=1.18.0

function usage() {
	cat <<-EOF
		Usage: ${0##*/} [options] SPDK_DIR

		Build the docs from the SPDK checkout in SPDK_DIR, then the site.

		  --serve      Run jekyll serve with live reload after the build
		  --host ADDR  Address for --serve to listen on (default 127.0.0.1)
		  --url URL    URL the site is published at, for example
		               https://USER.github.io/spdk.github.io (default https://spdk.io)
		  -h, --help   Show this help
	EOF
}

function die() {
	echo "ERROR: $*" >&2
	exit 1
}

rootdir=$(readlink -f "$(dirname "$0")/..")
mode=build
host=127.0.0.1
url=
baseurl=

while (($# > 0)); do
	case "$1" in
		--serve)
			mode=serve
			;;
		--host)
			host=${2:?--host requires an address}
			shift
			;;
		--url)
			# Jekyll takes the scheme and host as url, and the path as baseurl.
			[[ ${2-} =~ ^(https?://[A-Za-z0-9.-]+(:[0-9]+)?)(/[A-Za-z0-9._~/-]*)?$ ]] ||
				die "--url requires an HTTP or HTTPS URL"
			url=${BASH_REMATCH[1]}
			baseurl=${BASH_REMATCH[3]%/}
			shift
			;;
		-h | --help)
			usage
			exit 0
			;;
		-*)
			die "unknown option: $1"
			;;
		*)
			break
			;;
	esac
	shift
done

(($# == 1)) || {
	usage >&2
	exit 1
}
repo=$(readlink -m "$1")

installed_doxygen=$(doxygen --version)
installed_doxygen=${installed_doxygen%% *}
[[ $installed_doxygen == "$REQUIRED_DOXYGEN_VERSION" ]] ||
	die "Doxygen $REQUIRED_DOXYGEN_VERSION is required (found $installed_doxygen)"

tmpdir=$(mktemp -d)
trap 'rm -rf "$tmpdir"' EXIT

doc_version=$(git -C "$repo" rev-parse --short=9 HEAD)
site_version=$(git -C "$rootdir" rev-parse --short=9 HEAD)

{
	cat "$rootdir/_doxygen/doc_head.html"
	sed -e 's|{{ site.baseurl }}|..|g' \
		-e 's|{{ include.cn_path }}|/|' \
		-e "s|<!-- DOXYGEN_SEARCH -->|<div id=\"doxygen-searchbox\">\$searchbox</div>|" \
		"$rootdir/_includes/navbar.html"
} > "$tmpdir/header.html"

{
	sed -e 's|{{ site.baseurl }}|..|g' \
		-e "s|{% if site.spdk_sha %}||" \
		-e "s|{{ site.spdk_sha }}|$doc_version|" \
		-e "s|{{ site.site_sha }}|$site_version|" \
		-e "s|{% endif %}||" \
		"$rootdir/_includes/footer.html"
	printf '</body>\n</html>\n'
} > "$tmpdir/footer.html"

! grep -q -e '{{' -e '{%' "$tmpdir/header.html" "$tmpdir/footer.html" ||
	die "navbar.html or footer.html uses Liquid that the Doxygen header and footer do not handle"

outdir=$tmpdir/output
cat > "$tmpdir/Doxyfile.website" <<-EOF
	@INCLUDE = "$repo/doc/Doxyfile"
	OUTPUT_DIRECTORY = "$outdir"
	WARN_AS_ERROR = FAIL_ON_WARNINGS
	DISABLE_INDEX = YES
	HTML_HEADER = "$tmpdir/header.html"
	HTML_FOOTER = "$tmpdir/footer.html"
EOF

# Doxygen writes to the tmpdir, so the doc/output of a standalone build
# stays. clean then only removes the generated Markdown pages, so every
# build regenerates them.
doc_make=(make -C "$repo/doc" OUTPUT_DIRECTORY="$outdir" DOXYFILE="$tmpdir/Doxyfile.website")
"${doc_make[@]}" clean
"${doc_make[@]}"

rm -rf "$rootdir/doc"
mkdir -p "$rootdir/doc"
cp -a "$outdir/html/." "$rootdir/doc/"

{
	printf 'spdk_sha: "%s"\nsite_sha: "%s"\n' "$doc_version" "$site_version"
	[[ -z $url ]] || printf 'url: "%s"\nbaseurl: "%s"\n' "$url" "$baseurl"
} > "$tmpdir/jekyll-overrides.yml"
jekyll_args=(--config "$rootdir/_config.yml,$tmpdir/jekyll-overrides.yml")

if [[ $mode == serve ]]; then
	(cd "$rootdir"; bundle exec jekyll serve --livereload --host "$host" "${jekyll_args[@]}")
else
	(cd "$rootdir"; bundle exec jekyll build "${jekyll_args[@]}")
	echo "Site built to $rootdir/_site/"
fi
