NPM package dexonline-search
================================
## About ##

Use this npm package to get word definitions from dexonline.ro.

## Install ##

`@user:~$ npm install dexonline-search`

## Use ##

```js
var dexonline = requrie('dexonline-search');

dexonline("word_for_definition", function (err, definition) {

  console.log(definition);

});

```
