const BinarySearch = (arr, searchKey) => {

  let start;
  let end = arr.length - 1
  let midPoint = end - start / 2;
  console.log('arr mid', arr[midPoint])
  if (arr[midPoint] === searchKey) {
    return midPoint;
  }
  while (searchKey !== arr[midPoint]) {
    if (searchKey < arr[midpoint]) {
      end = midPoint;
    }
    if (searchKey > arr[midPoint]) {
      start = midPoint;
    }
  }
  return -1;
}
console.log(BinarySearch([2, 4, 6, 8, 10], 6));

module.exports = BinarySearch;