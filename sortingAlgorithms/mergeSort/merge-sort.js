

const mergeSort = (arr) => {
  let n = arr.length;

  if (n > 1) {
    let mid = Math.round(n / 2);
    let left = arr.slice(0, mid)
    let right = arr.slice(mid, n)

    mergeSort(left);
    mergeSort(right);
    merge(left, right, arr)
  }
  console.log('arr', arr)
  return arr;
}


const merge = (left, right, arr) => {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i]
      i++;
    } else {
      arr[k] = right[j];
      j++
    }
    k++
  }

  if (i === left.length) {
    // we continue to iterate over the rest of the right
    while (j < right.length) {
      arr[k] = right[j]
      j++;
      k++;

    }
  } else {
    // or we continue to iterate over the rest of the left
    while (i < left.length) {
      arr[k] = left[i]
      i++;
      k++;
    }
  }
}

module.exports = mergeSort;