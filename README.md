# watcher
puppetier watcher

## Setup

`npm install`

## Usage 

`node watcher.js <url> <selector>`

You will get value of the selector in url and a screenshot at `screenshot.png`.

## Usage in docker

docker run --rm gerblaurynas/watcher node watcher.js $URL $SELECTOR
