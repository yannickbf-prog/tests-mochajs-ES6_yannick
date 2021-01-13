/**
 * 
 * Prova de Mocha asincron. Amb Axios se simplifica el procés, amb fetch suposa més linies de codi
 * 
 * https://masteringjs.io/tutorials/mocha/async
 */

//const assert = require("assert");
//const axios = require("axios");
//const fetch = require("node-fetch");

import assert from 'assert';
import axios from 'axios';
import fetch from 'node-fetch';
import {suma} from '../src/js/operacions.mjs';


// Amb axios (tutorial adalt)

describe("axios get sobre httpbin, answer = 42", function () {
  it("works", async function () {
    const res = await axios.get("http://httpbin.org/get?answer=42");

    //console.log(res);

    assert.strictEqual(res.data.args.answer, '42');
  });
});

// Amb fetch (ho he fet jo)

describe("fetch sobre httpbin, answer = 42", function () {
    it("works", async function () {

      const res = await fetch("http://httpbin.org/get?answer=42");
      const promesa = res.json();
      promesa.then( (dades) => { assert.strictEqual(dades.args.answer, '42') } );
  });
});
  
  