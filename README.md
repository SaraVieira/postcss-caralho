# PostCSS Caralho Plugin [![Travis](https://travis-ci.org/SaraVieira/postcss-caralho.svg?branch=master)](https://travis-ci.org/SaraVieira/postcss-caralho)
[![Coverage Status](https://coveralls.io/repos/github/SaraVieira/postcss-caralho/badge.svg?branch=master)](https://coveralls.io/github/SaraVieira/postcss-caralho?branch=master)
[![npm](https://badge.fury.io/js/postcss-caralho.svg)](https://www.npmjs.com/package/postcss-caralho)



[PostCSS] plugin for that changes curse words after ! to !important because why not ?

[PostCSS]: https://github.com/postcss/postcss

```css
.foo {
    top: 20px !fuck;
}
```

```css
.foo {
    top: 20px !important;
}
```

You can also choose from [many more](https://github.com/SaraVieira/curse-words) options in different languages and all of them will become `!important` after PostCSS does his/her thing.

## Why ?

Idk, mainly boredom and the need to write !caralho or !fuck in every stylesheet I own.

## I want to add words !

Awesome ! You can create a PR here:
[https://github.com/SaraVieira/curse-words](https://github.com/SaraVieira/curse-words) and these tests and the ones in [https://github.com/SaraVieira/babel-plugin-caralho](https://github.com/SaraVieira/babel-plugin-caralho) will be generated automatically 🎉

## Install

Install from NPM using:

```
npm i postcss-caralho --save-dev
```

Or Yarn:

```
yarn add postcss-caralho --dev
```

## Usage

```js
postcss([ require('postcss-caralho') ])
```

See [PostCSS] docs for examples for your environment.


## License

Use as you please to confuse people and enjoy (MIT)
