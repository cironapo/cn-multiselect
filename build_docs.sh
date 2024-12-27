#!/bin/bash
npx stencil build --docs
cp ./src/components/cn-multiselect/readme.md ./docs/docs/docs.md

echo '---\nsidebar_position: 1\n---' | cat - ./docs/docs/docs.md | sed "s|# cn-multiselect|# Documentation|g" > ./temp
mv ./temp ./docs/docs/docs.md
