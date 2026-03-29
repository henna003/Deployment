import { expect } from 'chai';
import chunk from '../src/chunk.js';


describe('chunk', () => {

// Testing splitting an array into chunks of a specified size.
    it('splits array into equal chunks', () => {
        expect(chunk(['a', 'b', 'c', 'd'], 2)).to.deep.equal([['a', 'b'], ['c', 'd']]);
    });

// Testing behaviourwhen array can not be split into equal chunks.
    it('handles uneven chunks', () => {
        expect(chunk(['a', 'b', 'c', 'd'], 3)).to.deep.equal([['a', 'b', 'c'], ['d']]);
    });

// Testing empty input array.
    it('returns empty array for empty input', () => {
        expect(chunk([], 2)).to.deep.equal([]);
    });

// Testing when chunk size is 0.
    it('returns empty array when size is 0', () => {
        expect(chunk(['a', 'b'], 0)).to.deep.equal([]);
    });

// Testing when input array is null.
    it('returns empty array when array is null', () => {
        expect(chunk(null, 2)).to.deep.equal([]);
    });

// Testing when chunk size is larger than the array length.
    it('handles size larger than array', () => {
        expect(chunk(['a', 'b'], 10)).to.deep.equal([['a', 'b']]);
    });
});