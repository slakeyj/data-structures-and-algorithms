const binarySearch = (arr, searchKey) => {
  let start = 0;
  let end = arr.length - 1
  let midPoint = (end - start) / 2;
  if (searchKey === arr[midPoint]) {
    return midPoint;
  }
  while (searchKey !== arr[midPoint]) {
    if (searchKey < arr[midPoint]) {
      end = midPoint - 1;

      midPoint = Math.floor((end - start) / 2) - midPoint;
      console.log('state:', start, midPoint, end);
    } else if (searchKey > arr[midPoint]) {
      start = midPoint + 1;
      midPoint = Math.floor((end - start) / 2) + midPoint;
      console.log('state:', start, midPoint, end);
    } else {
      console.log('state:', start, midPoint, end);
      if (arr[midPoint] === searchKey) {
        return midPoint;
      }
      break;
    }
  }
  return -1
}


module.exports = binarySearch;