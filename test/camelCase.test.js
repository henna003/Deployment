import { expect } from 'chai';
import camelCase from '../src/camelCase.js';

describe('camelCase', () => {

    it('converts simple words', () => {
        expect(camelCase('Foo Bar')).to.equal('fooBar');
    });

    it('handles dashes', () => {
        expect(camelCase('--foo-bar--')).to.equal('fooBar');
    });

    it('it handels underscores and uppercase', () => {
        expect(camelCase('_FOO_BAR_')).to.equal('fooBar');
    });

    it('it handles single word', () => {
        expect(camelCase('hello')).to.equal('hello');
    });

    it('it handles empty string', () => {
        expect(camelCase('')).to.equal('');
    });

    it('it handles numbers in string', () => {
        expect(camelCase('foo 123 bar')).to.equal('foo123Bar');
    });
});