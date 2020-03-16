const insertionSort = require('../insertionSort/insertion-sort')

describe('insertionSort', () => {

  it('sorts an array of numbers that are all unique values', () => {
    const uniqueNumbers = [5, 2, 6, 7, 3]
    expect(insertionSort(uniqueNumbers)).toEqual([2, 3, 5, 6, 7])
  })

  it('sorts an array with some numbers that are the same', () => {
    const nonUniqueNumbers = [4, 4, 2, 1, 6, 6, 5];
    expect(insertionSort(nonUniqueNumbers)).toEqual([1, 2, 4, 4, 5, 6, 6])
  })

  it('sorts a reverse sorted array', () => {
    const reverseSorted = [20, 18, 12, 8, 5, -2];
    expect(insertionSort(reverseSorted)).toEqual([-2, 5, 8, 12, 18, 20])
  })

  it('returns an empty array when given an empty array', () => {
    const empty = [];
    expect(insertionSort(empty)).toEqual([]);
  })

})