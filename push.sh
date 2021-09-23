#!/bin/bash
yarn build
git add .
git commit -m $1
git push