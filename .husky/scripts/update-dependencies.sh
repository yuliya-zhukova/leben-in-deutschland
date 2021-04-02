#!/bin/sh

printf "Updating dependencies...\n"

# Based on https://gist.github.com/sindresorhus/7996717

changedFiles="$(git diff-tree -r --name-only --no-commit-id ORIG_HEAD HEAD)"

isChanged() {
	echo "$changedFiles" | grep --quiet "$1" && return 0 || return 1
}

echo "$changedFiles"

isChanged "package.json\|package-lock.json" && npm install || printf "Dependencies are up to date.\n"
