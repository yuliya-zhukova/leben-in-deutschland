#!/bin/sh

# Based on https://gist.github.com/sindresorhus/7996717

echo "Checking dependencies...\n"

changedFiles="$(git diff-tree -r --name-only --no-commit-id HEAD@{1} HEAD)"
echo "Changed files:"
echo "$changedFiles\n"

isChanged() {
	echo "$changedFiles" | grep --quiet "$1" && return 0 || return 1
}

isChanged "package.json\|package-lock.json" && (echo "Updating dependencies..." && npm install) || echo "Dependencies are up to date.\n"
