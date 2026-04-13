#!/usr/bin/env bash

set -x
set -e

rootdir=$(readlink -f "$(dirname $0)")
repo="$rootdir/spdk"
source "$rootdir/common.sh"

TEST_MODE=0

for i in "$@"; do
	case "$i" in
		--test)
			TEST_MODE=1
			;;
	esac
done

if [ -d "$repo" ]; then
	if [ "$TEST_MODE" -eq 1 ]; then
		(cd "$repo"; git clean -x -d -f -f; git checkout master)
	else
		remove_repo "$repo"
	fi
fi

check_clone_repo "$repo"

doc_version=$(cd $repo; git rev-parse HEAD)

regenerate_docs "$repo"

if [ "$TEST_MODE" -eq 0 ]; then
	remove_repo "$repo"
fi

echo
echo "Docs generated from spdk commit $doc_version"
echo
