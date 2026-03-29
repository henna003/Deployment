import { expect } from 'chai';
import camelCase from '../src/camelCase.js';

//Debug logs to verify that tests are running and function works.
console.log("TEST RUNNING");
console.log("camelCase:", camelCase("foo bar"));

describe('camelCase', () => {

// Test basic conversion of two words.
    it('converts simple words', () => {
        expect(camelCase('Foo Bar')).to.equal('fooBar');
    });

// Test handling of dashes in the input string.
    it('handles dashes', () => {
        expect(camelCase('--foo-bar--')).to.equal('fooBar');
    });

// Test handling of underscores and uppercase input.
    it('handles underscores and uppercase', () => {
        expect(camelCase('_FOO_BAR_')).to.equal('fooBar');
    });

// Test single word input.
    it('handles single word', () => {
        expect(camelCase('hello')).to.equal('hello');
    });

// Test empty string input.
    it('handles empty string', () => {
        expect(camelCase('')).to.equal('');
    });

// Test strings conaining numbers.
    it('handles numbers in string', () => {
        expect(camelCase('foo 123 bar')).to.equal('foo123Bar');
    });
});
