#!/bin/bash

branch=$(git branch --show-current)
remote=$(git rev-parse --symbolic-full-name --abbrev-ref "$branch@{u}")
pushes=$(git diff --name-only "$remote")
svgs=$(echo "$pushes" | grep ".svg$")
svgs=($svgs)

if [ ${#svgs[@]} -gt 0  ]; then
    node optimize-test.js "${svgs[@]@Q}"
fi
