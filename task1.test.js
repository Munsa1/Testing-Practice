const { test, expect } = require('@jest/globals');
const stringLength = require('./task1');

test('calculates the string name',()=> {
    expect(stringLength()).toBe(7);
})