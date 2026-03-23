#!/usr/bin/env bash

set -x
set -e

rootdir=$(readlink -f "$(dirname $0)")
repo="$rootdir/spdk"
source "$rootdir/common.sh"

TEST_MODE=0
SERVE_MODE=0
CUSTOM_SPDK=""

for i in "$@"; do
	case "$i" in
		--test)
			TEST_MODE=1
			;;
		--serve)
			SERVE_MODE=1
			;;
		--spdk-path)
			shift_next=1
			;;
		*)
			if [ "${shift_next:-0}" -eq 1 ]; then
				CUSTOM_SPDK="$i"
				shift_next=0
			fi
			;;
	esac
done

if [ -n "$CUSTOM_SPDK" ]; then
	repo=$(readlink -f "$CUSTOM_SPDK")
fi

if [ -z "$CUSTOM_SPDK" ]; then
	if [ -d "$repo" ]; then
		if [ "$TEST_MODE" -eq 1 ]; then
			(cd "$repo"; git clean -x -d -f -f; git checkout master)
		else
			remove_repo "$repo"
		fi
	fi

	check_clone_repo "$repo"
fi

doc_version=$(cd "$repo"; git rev-parse HEAD)

regenerate_docs "$repo"

if [ -z "$CUSTOM_SPDK" ] && [ "$TEST_MODE" -eq 0 ]; then
	git add "$rootdir/doc"
	remove_repo "$repo"
fi

if [ "$SERVE_MODE" -eq 1 ] || [ "$TEST_MODE" -eq 1 ]; then
	echo
	echo "Docs generated from spdk commit $doc_version"
	echo

	if [ "$SERVE_MODE" -eq 1 ]; then
		echo "Starting local server at http://localhost:4000"
		(cd "$rootdir"; bundle exec jekyll serve --livereload)
	else
		echo "Building full site..."
		(cd "$rootdir"; bundle exec jekyll build)
		echo
		echo "Site built to $rootdir/_site/"
		echo "To browse: cd $rootdir && bundle exec jekyll serve"
	fi
elif [ -n "$(git status --porcelain --untracked-files=no)" ]; then
	echo "$doc_version" > _doc_version.txt
	git add "$rootdir/_doc_version.txt"

	echo
	echo "New docs generated"
	echo
	git status
else
	exit 0
fi
