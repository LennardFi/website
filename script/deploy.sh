#!/usr/bin/env bash

# prepare website
echo Prepare...
git pull
nvm use stable

# build website
echo Building website...
npm run build

# start website
echo Starting website...
npm run start
