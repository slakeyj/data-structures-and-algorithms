'use strict';

const insertShiftArray = require('./array-shift.js')

describe('insertShiftArray', () => {
  it('inserts number into middle of an array with even number of values', () => {
    expect(insertShiftArray([4, 5, 7, 8], 6)).toEqual([4, 5, 6, 7, 8]);
  })
  it('inserts number into middle of an array with odd number of values', () => {
    expect(insertShiftArray([0, 1, 2, 4, 5], 3)).toEqual([0, 1, 2, 3, 4, 5]);
  })
  it('returns an array with 1 value when given an empty array', () => {
    expect(insertShiftArray([], 1)).toEqual([1]);
  })
  it('inserts value at end of array when given array with 1 values', () => {
    expect(insertShiftArray([1], 2)).toEqual([1, 2]);
  })


})