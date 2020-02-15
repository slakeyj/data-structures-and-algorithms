const BinarySearch = require('./array-binary-search.js');

xdescribe('BinarySearch', () => {
  it('should return the index where the value sits if there is a match', () => {
    expect(BinarySearch([1, 2, 3, 4, 5], 3)).toEqual(2);
  })
  it('should return -1 if no match is found', () => {
    expect(BinarySearch([1, 2, 3, 4, 5], 8)).toEqual(-1);
  })

  it('should return -1 when given an empty array', () => {
    expect(BinarySearch([], 8)).toEqual(-1);
  })

  it('should work with negative numbers to search', () => {
    expect(BinarySearch([-3, -2, 0, 1, 2], -2)).toEqual(1);
  })
})