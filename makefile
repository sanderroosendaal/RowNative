.PHONY: init build validate audit

## Initialize (npm install)
init:
	npm install

## Build the app
build:
	npm run android
	npm run ios

## Validate project
validate:
	npm run lint

## Run audit check for production
audit:
	npm audit --production
