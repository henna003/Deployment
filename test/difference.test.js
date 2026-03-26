import { expect } from "chai";
import difference from "../src/difference.js";

describe("difference", () => {

// Testing basic difference functionality with simple arrays.
    it("returns the difference between two arrays", () => {
        expect(difference([2, 1], [2, 3])).to.deep.equal([1]);
    });

// Testing behavior when one of the arrays is empty.
    it("handles empty arrays", () => {
        expect(difference([], [1, 2])).to.deep.equal([]);
        expect(difference([1, 2], [])).to.deep.equal([1, 2]);
    });

// Testing with no common elements between the arrays.
    it("handles arrays with no common elements", () => {
        expect(difference([1, 2], [3, 4])).to.deep.equal([1, 2]);
    });

// Testing multiple arrays to remove values from the first array.
    it('handles multiple arrays of values to remove', () => {
        expect(difference([1, 2, 3, 4], [2, 3], [4, 5])).to.deep.equal([1]);
    });

// Testing non-array inputs to ensure they are treated as empty arrays.
    it('returns an empty array for null inputs', () => {
        expect(difference(null, [1, 2])).to.deep.equal([]);
    });

});
