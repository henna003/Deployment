import { expect } from 'chai';
import add from '../src/add.js';

describe('add function', () => {
    it('adds two positive numbers', () => {
    expect(add(6, 4)).to.equal(10);
    });

    it('adds with zero', () => {
    expect(add(5, 0)).to.equal(5);
    });
});

// import proxyquire from 'proxyquire';
// import { expect } from 'chai';

// const add = proxyquire('../src/add.js', {'./.internal/createMathOperation.js': (fn, initial) => fn
// });

// describe('add function', () => {
//     it('adds two positive numbers', () => {
//     expect(add(6, 4)).to.equal(10);
//     });

//     it('adds with zero', () => {
//     expect(add(5, 0)).to.equal(5);
//     });
// });

