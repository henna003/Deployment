import { expect } from 'chai';
import chunk from '../src/chunk.js';

describe('chunk', () => {
    it('splits array into equal chunks', () => {
        expect(chunk(['a', 'b', 'c', 'd'], 2)).to.deep.equal([['a', 'b'], ['c', 'd']]);
    });

    it('handles uneven chunks', () => {
        expect(chunk(['a', 'b', 'c', 'd'], 3)).to.deep.equal([['a', 'b', 'c'], ['d']]);
    });

    it('returns empty array for empty input', () => {
        expect(chunk([], 2)).to.deep.equal([]);
    });

    it('returns empty array when size is 0', () => {
        expect(chunk(['a', 'b'], 0)).to.deep.equal([]);
    });

    it('returns empty array when array is null', () => {
        expect(chunk(null, 2)).to.deep.equal([]);
    });

    it('handles size larger than array', () => {
        expect(chunk(['a', 'b'], 10)).to.deep.equal([['a', 'b']]);
    });
});