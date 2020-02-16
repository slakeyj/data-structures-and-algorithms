const binarySearch = require('./array-binary-search.js');


describe('binarySearch', () => {
  it('should return the index where the value sits if there is a match', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 4)).toEqual(3);

  })
  it('should return -1 if no match is found', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 8)).toEqual(-1);
  })

  it('should return -1 when given an empty array', () => {
    expect(binarySearch([], 8)).toEqual(-1);
  })

  it('should work with negative numbers', () => {
    expect(binarySearch([-3, -2, 0, 1, 2], -2)).toEqual(1);
  })
})