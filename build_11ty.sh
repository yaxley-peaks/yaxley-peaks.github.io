#!/bin/sh

set -xe
npx @11ty/eleventy 
cp -rf ./static/css/ ./public/things/