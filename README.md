# Tests Unitaris a Front Web

Tests unitaris amb Mocha.js.

L'entorn de desenvolupament en aquest cas és una aplicació web. 

Per poder executar els nostres tests, convé canviar l'extensió dels mòduls a `.mjs` i afegir el descriptor de primer nivell `"type": "module"` al package.json més proper.

## Webgrafia

- [Unit Testing in JavaScript with Mocha, Tania Rascia, 03-27-2018](https://www.taniarascia.com/unit-testing-in-javascript)
- [Mocha Docs](https://mochajs.org/)
- https://nodejs.org/docs/latest-v13.x/api/esm.html#esm_enabling
- https://stackoverflow.com/questions/45854169/how-can-i-use-an-es6-import-in-node-js

## Tests amb Mocha

### Instal·la Mocha

1. Instal·la `Mocha` com a dependència de desenvolupament amb:

```
npm install --save-dev mocha
```
2. Crea una carpeta anomenada `test` en el directori arrel i introdueix a dins els fitxers de test (com en l'exemple d'aquest repositori.)
3. En el `package.json`, hi ha d'haver un descriptor en el primer nivell com:
```
  "type": {
    "test": "mocha test"
  }
```

### Configura suport per mòduls ES6

1. Els fitxers de mòduls haurien de tenir l'extensió `.mjs` 
2. En el fitxer `package.json`, afegeix aquest descriptor en el primer nivell del JSON:

```
  "type": "module"

```
> En cas de no tenir fitxer `package.json`, crea'l abans amb `npm init`

### Executar els test,

```
npm test
```
