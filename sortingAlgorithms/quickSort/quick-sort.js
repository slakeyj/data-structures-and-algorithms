const quickSort = (arr, start = 0, end = arr.length - 1) => {
  if (start < end) {
    let pIndex = partition(arr, start, end);
    quickSort(arr, start, pIndex - 1);
    quickSort(arr, pIndex + 1, end);
  }
  return arr;
}


const partition = (arr, start, end) => {
  let pivot = arr[end];
  let pIndex = start;

  for (let i = start; i <= end; i++) {
    // if the current array value is less than pivot, swap that value with pIndex value
    if (arr[i] < pivot) {
      swap(arr, i, pIndex)
      pIndex++;
    }
  }
  // swaps pivot value into the middle
  swap(arr, end, pIndex)
  return pIndex;
}

const swap = (arr, i, pIndex) => {
  let temp;
  temp = arr[i];
  arr[i] = arr[pIndex];
  arr[pIndex] = temp;
}


module.exports = quickSort;