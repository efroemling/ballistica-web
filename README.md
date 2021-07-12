# Ballistica Web Front-End

This will hopefully mutate into a useful toolset for Ballistica related functionality (wrangling mods, cloud hosting, asset packages, etc). For now though it is largely just me learning Angular/Material.

This was shamelessly spun off from the [Angular Components documentation site](https://material.angular.io/).


## Development Setup

1. Make sure you have [NodeJS](https://nodejs.org) installed
1. Make sure you have [Yarn](https://yarnpkg.com) installed
1. Install the project's dependencies
   - `yarn install`

## Development Server

1. Run `yarn start` for a dev server. Navigate to `http://localhost:4200/`.

## Build

Run `yarn prod-build` to build the project.

## Running unit tests

1. Run `yarn test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `yarn e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `yarn start`.
