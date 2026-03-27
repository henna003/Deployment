import { expect } from 'chai';
import add from '../src/add.js';


// Testing normal addition of two positive numbers.
describe('add function', () => {
    it('adds two positive numbers', () => {
    expect(add(6, 4)).to.equal(10);
    });

// Testing addition of a positive and a negative number.
    it('adds with zero', () => {
    expect(add(5, 0)).to.equal(5);
    });

// Testing addition of a negative numbers
    it("addsnegative numbers", () => {
        expect(add(-3, -2)).to.equal(-5);
        expect(add(-3, 2)).to.equal(-1);
    });

// Testing decimal numbers
    it("adds decimal numbers", () => {
        expect(add(2.5, 3.1)).to.equal(5.6);
    });
});
