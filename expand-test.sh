#!/bin/bash

branch=$(git branch --show-current)
remote=$(git rev-parse --symbolic-full-name --abbrev-ref "$branch@{u}")
pushes=$(git diff --name-only "$remote")
svgs=$(echo "$pushes" | grep ".svg$")
IFS=$'\n'
svgs=($svgs)
echo "$svgs"
echo "Pushing svgs: " "${svgs[@]@Q}"
