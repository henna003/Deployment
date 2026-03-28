import { expect } from 'chai';
import countBy from '../src/countBy.js';


// Testing basic counting with boolean values.
describe('countBy', () => {
    it("counts values based on iteratee result (boolean)", () => {
        const users = [
            { 'user': 'barney', 'active': true },
            { 'user': 'betty', 'active': true },
            { 'user': 'fred', 'active': false }
        ];
        expect(countBy(users, value => value.active))
            .to.deep.equal({ 'true': 2, 'false': 1 });
    });

// Testing undefined iteratee result.
    it("handels undefined iteratee result", () => {
        expect(countBy([1, 2], () => undefined))
        .to.deep.equal({ 'undefined': 2 });
    });

// Testing empty collection.
    it("returns an empty object for an empty collection", () => {
        expect(countBy([], value => value)).to.deep.equal({});
    });
});