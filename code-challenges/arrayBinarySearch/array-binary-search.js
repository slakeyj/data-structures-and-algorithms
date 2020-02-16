const binarySearch = (arr, searchKey) => {
  let start = 0;
  let end = arr.length - 1
  let midPoint = calculateMidpoint(start, end);
  if (searchKey === arr[midPoint]) {
    return midPoint;
  }

  while (start < end && searchKey !== arr[midPoint]) {
    if (searchKey < arr[midPoint]) {
      end = midPoint - 1;
      midPoint = calculateMidpoint(start, end);
    } else if (searchKey > arr[midPoint]) {
      start = midPoint + 1;
      midPoint = calculateMidpoint(start, end) + start;
    } else {
      break;
    }
  }
  if (arr[midPoint] === searchKey) {
    return midPoint;
  }
  return -1
}

const calculateMidpoint = (start, end) => {
  return Math.floor((end - start) / 2);
}
module.exports = binarySearch;
