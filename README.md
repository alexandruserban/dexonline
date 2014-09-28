NPM package dexonline-search-api
================================
## About ##

Use this npm package to get word definitions from dexonline.ro in a JSON format

## Install ##

`@user:~$ npm install dexonline-search-api`

## Use ##

```js
var dexonline = requrie('dexonline-search-api');

dexonline("word_for_definition", function (err, definition) {

  console.log(definition);

});

```
