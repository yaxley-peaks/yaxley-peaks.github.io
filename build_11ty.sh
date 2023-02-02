#!/bin/sh

set -xe
npx @11ty/eleventy 
# cp -rf ./static/css/ ./public/things/
cp -rf ./static/_assets/ ./public/posts/