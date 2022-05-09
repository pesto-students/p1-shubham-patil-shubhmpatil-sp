const mathOperations = require('./Operations');

test('sum',()=>{
    expect(mathOperations.sum(2,2)).toEqual(4);
    expect(mathOperations.sum(-2,2)).toEqual(0);
    expect(mathOperations.sum(-2,-2)).toEqual(-4);
})

test('diff', ()=>{
    expect(mathOperations.diff(3,2)).toEqual(1);
    expect(mathOperations.diff(1,2)).toEqual(-1);
    expect(mathOperations.diff(1,1)).toEqual(0);
})

test('product', ()=>{
    expect(mathOperations.product(2,2)).toEqual(4);
    expect(mathOperations.product(-2,-2)).toEqual(4);
    expect(mathOperations.product(-3,2)).toEqual(-6);
})



/*
OUTPUT:

PS F:\Pesto\p1-shubham-patil-shubhmpatil-sp> npm test

> test
> jest

 PASS  Week-5/Assignment4/Operation.test.js
  √ sum (33 ms)
  √ diff (2 ms)
  √ product (2 ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        1.187 s, estimated 2 s
Ran all test suites.
*/