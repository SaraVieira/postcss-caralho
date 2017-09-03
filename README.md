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
    top: 20px  !important;
}
```

You can also use:


### Portuguese
* caralho (fuck)
* foda-se (fuck)
* merda (shit)
* desculpa (sorry)
* putaqpariu (fuck this)
* desisto (I quit)
* bardamerda (This rally does not have a translation) 

### Brazilian
* filhodaputa (son of a bitch)
* demonio (demon)
* satanas (satan)
* desgraça (disgrace)
* paunocu (stick in the ass)
* feijoada (This rally does not have a translation) 

### English
* fuckthis
* fuck
* sorry
* shit
* please

### German
* scheisse (fuck)
* scheiße (crap)
* verdammt (damned)
* kacke (shit) 

### Persian (These google translation may be wrong)
* jakesh (Pussy)
* daus (Sickle)
* antar (Ether)
* pofuz (Poufos)
* lanati (Damn)
* lamasab (Lomost)

### Konkani (Google cannot translate PR anyone ?) 
* chont
* fodo
* fodri
* zov

### Hindi (Googles translations are horrible PR anyone ?)
* lund
* lavda
* choot

### Russian
* блять (fuck)
* сука (bitch)
* тварь (creature)
* работай (work)
* чезахуйня (chezahuyna?)
* гандон (Gondon?)
* скемнебывает (It happens to everyone)
* упс (oops)
* ебанина (fucker)
* какаятоебанина (a kind of banana)

And all of this will become important after PostCSS does his thing.

## Why ?

Idk, mainly boredom and the need to write !caralho or !fuck in every stylesheet I own.

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
