#!/bin/sh

# Based on https://gist.github.com/sindresorhus/7996717

printf "Checking dependencies...\n\n"

changedFiles="$(git diff-tree -r --name-only --no-commit-id HEAD@{1} HEAD)"
printf "Changed files:\n"
printf "%s\n\n" "$changedFiles"

isChanged() {
	printf "$changedFiles" | grep --quiet "$1" && return 0 || return 1
}

isChanged "package.json\|package-lock.json" && (printf "Updating dependencies...\n" && npm install) || printf "Dependencies are up to date.\n"
