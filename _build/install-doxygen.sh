#!/usr/bin/env bash
# Install the pinned Doxygen version used to build the website.

set -euo pipefail

readonly DOXYGEN_COMMIT=8e760943e5d9581a444cf327f43a0b4d20d29482

if [[ $# != 1 || -z $1 ]]; then
	echo "Usage: ${0##*/} PREFIX" >&2
	exit 1
fi

prefix=$(readlink -m "$1")
tmpdir=$(mktemp -d)
trap 'rm -rf "$tmpdir"' EXIT

git init -q "$tmpdir/source"
git -C "$tmpdir/source" fetch --depth 1 https://github.com/doxygen/doxygen "$DOXYGEN_COMMIT"
git -C "$tmpdir/source" checkout -q --detach FETCH_HEAD

cmake -S "$tmpdir/source" -B "$tmpdir/build" \
	-DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_PREFIX="$prefix"
cmake --build "$tmpdir/build" --parallel "$(nproc)"
cmake --install "$tmpdir/build"
