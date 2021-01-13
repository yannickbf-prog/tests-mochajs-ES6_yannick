//const assert = require('assert')
import assert from 'assert';
import {suma} from '../src/js/operacions.mjs';

describe('OPERACIONS ARITMÈTIQUES',  function() {

    it('suma entre 2 operands sencers positius funciona', () => {
        assert.strictEqual( suma(100,25), 125 )
    })


    it('suma entre un nombre i un string retorna NaN', () => {
        assert.strictEqual( isNaN(suma(100, 'patata')), true )
    })


/*
    it('La suma entre un nombre en format string i un nombre retorna NaN', () => {
        assert.strictEqual( isNaN(operacions.suma('5', '12')), true )
    })  
*/


/*
    it('La suma entre un nombre en format string i un nombre retorna NaN', () => {
        assert.strictEqual( operacions.suma('5', '12'), NaN )
    })
*/
})
