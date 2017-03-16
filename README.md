# PostCSS Caralho Plugin [![Travis](https://travis-ci.org/SaraVieira/postcss-caralho.svg?branch=master)](https://travis-ci.org/SaraVieira/postcss-caralho) [![npm](https://badge.fury.io/js/postcss-caralho.svg)](https://www.npmjs.com/package/postcss-caralho)

[PostCSS] plugin for that changes !important to !caralho because why not ?

[PostCSS]: https://github.com/postcss/postcss

```css
.foo {
    top: 20px !caralho;
}
```

```css
.foo {
    top: 20px  !important;
}
```

## Why ?

Idk, mainly boredom and the need to write !caralho in every stylesheet I own.

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

Use as you please to confuse people and enjoy
