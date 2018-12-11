# jest-url-loader

[![npm](https://img.shields.io/npm/v/jest-url-loader.svg)](https://www.npmjs.com/package/jest-url-loader)
[![Build Status](https://travis-ci.org/srghma/jest-url-loader.svg?branch=master)](https://travis-ci.org/srghma/jest-url-loader)
[![Code Coverage](https://codecov.io/gh/srghma/jest-url-loader/branch/master/graph/badge.svg)](https://codecov.io/gh/srghma/jest-url-loader)
[![Code Style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)


[Jest](https://facebook.github.io/jest/) transformer mimicking [webpack-contrib/url-loader](https://github.com/webpack-contrib/url-loader)'s functionality

## Install

```
$ npm install --save-dev jest-url-loader
```

## Usage

Use [jest's `transform` configuration options](https://facebook.github.io/jest/docs/en/configuration.html#transform-object-string-string) to use this package in your unit tests.

For example use the following to url load `.md` and `.graphql` files:

```json
"jest": {
  "transform": {
    "\\.png$": "jest-url-loader",
    "\\.jpg$": "jest-url-loader"
  }
}
```

## License

MIT © [Sergey Homa](https://github.com/srghma)
