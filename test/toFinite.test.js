import { expect } from "chai";
import toFinite from "../src/toFinite.js";

// Testing that normal numbers are returned as-is.
describe ("toFinite", () => {
    it('converts normal numbers correctly', () => {
        expect(toFinite(3.2)).to.equal(3.2);
        expect(toFinite(42)).to.equal(42);
    });

// Testing that numeric strings are converted to numbers.

    it('converts numeric strings to numbers', () => {
        expect(toFinite('3.2')).to.equal(3.2);
        expect(toFinite('42')).to.equal(42);
    });

// Testing that Infinity and -Infinity are converted to the maximum finite values.
    it('converts Infinity and -Infinity to the maximum finite values', () => {
        expect(toFinite(Infinity)).to.equal(1.7976931348623157e+308);
        expect(toFinite(-Infinity)).to.equal(-1.7976931348623157e+308);
    });

// Testing that non-numeric values are converted to 0.
    it('handles null, undefined, NaN and 0', () => {
        expect(toFinite(null)).to.equal(0);
        expect(toFinite(undefined)).to.equal(0);
        expect(toFinite(NaN)).to.equal(0);
        expect(toFinite(0)).to.equal(0);
    });

// Testing very small numbers
    it('handles very small numbers', () => {
        expect(toFinite(Number.MIN_VALUE)).to.equal(Number.MIN_VALUE);
    });
});