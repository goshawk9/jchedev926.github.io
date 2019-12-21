#! /bin/bash

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git config user.name 'proactive-developer'
git config user.email 'proactive-developer@hotmail.com'
git add -A
git commit -m 'Deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:proactive-developer/proactive-developer.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:proactive-developer/portfolio.git master:gh-pages

cd -