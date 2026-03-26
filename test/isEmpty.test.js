import { expect } from 'chai';
import isEmpty from '../src/isEmpty.js';

// Testing that isEmpty returning true, if value is null or undefined.
describe('isEmpty', () => {
    it('returns true for null and undefined', () => {
        expect (isEmpty(null)).to.be.true;
        expect (isEmpty(undefined)).to.be.true;
    });

// Testing that isEmpty returning true, if value is boolean or number.
    it('returns true for booleans and numbers', () => {
        expect (isEmpty(true)).to.be.true;
        expect (isEmpty(0)).to.be.true;
        expect (isEmpty(42)).to.be.true;
    });

// Testing that isEmpty returning true, if value is array-like and has length of 0.
    it('handles strings', () => {
        expect (isEmpty('')).to.be.true;
        expect (isEmpty('hello')).to.be.false;
    });

// Testing that isEmpty correctly identifies empty arguments objects.
    it('handles arguments', () => {
        (function() {
            expect (isEmpty(arguments)).to.be.true;
        })();
        (function() {
            expect (isEmpty(arguments)).to.be.false;
        })(1, 2);
    });


// Testing that isEmpty correctly identifies plain object.
    it('handles plain objects', () => {
        expect (isEmpty({})).to.be.true;
        expect (isEmpty({ a: 1 })).to.be.false;
    });

// Testing that isEmpty correctly identifies Object.prototype as empty.

    it('handles prototypes', () => {
        expect(isEmpty(Object.prototype)).to.be.true;
    });;
});

