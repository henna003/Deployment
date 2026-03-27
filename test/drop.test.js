import { expect } from 'chai';
import drop from '../src/drop.js';

describe('drop', () => {

// Testing that the function drops one element by default.
    it('drops one element by default', () => {
        expect(drop([1, 2, 3])).to.deep.equal([2,3]);
    });

// Testing that the function drops n elements when n is specified.
    it('drops n elements from the beginning', () => {
        expect(drop([1, 2, 3], 2)).to.deep.equal([3]);
    });

// Testing that n is bigger than the array length.
    it("returns an empty array if n is greater than the array length", () => {
        expect(drop([1, 2, 3], 5)).to.deep.equal([]);
    });

// Testing that n = 0, returns the original array.
    it("returns the original array if n is 0", () => {
        expect(drop([1, 2, 3], 0)).to.deep.equal([1, 2, 3]);
    });
});