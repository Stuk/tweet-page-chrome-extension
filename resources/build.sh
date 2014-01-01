#!/bin/bash

cd "$(dirname "$0")"/..

rm build.zip
zip -r build.zip _locales icons main.js manifest.json
