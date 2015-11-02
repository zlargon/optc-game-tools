#!/bin/bash
DIR=$(dirname $0)/..
cd $DIR

VERSION=$(git log -1 --pretty="%h")
DATE=$(date)

# build production bundle.js
webpack -p

# copy folder 'bundle.js' and 'index.html' to 'delopy'
rm -rf deploy
mkdir deploy
cp index.html bundle.js deploy

# modify index.html
cd deploy
sed -i '' "s/VERSION/${VERSION}/g" index.html
sed -i '' "s/DATE/${DATE}/g" index.html

# push to github
git init
git add -A
git commit -m "deploy ${VERSION} on ${DATE}"
git checkout -b gh-pages
git remote add github git@github.com:zlargon/optc-game-tools.git
git push -f github gh-pages
