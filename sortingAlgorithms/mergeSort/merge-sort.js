
let sortedArray =

const mergeSort = (arr) => {
  let n = arr.length;

  if (n > 1) {
    let mid = Math.round(n / 2);
    let left = arr.slice(0, mid - 1)
    let right = arr.slice(mid, n)

    mergeSort(left);
    mergeSort(right);

    merge(left, right, arr)

  }
}


const merge = (left, right, arr) => {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i > left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i]
      i++;
    } else {
      arr[k] = right[j];
      j++
    }
    k++
  }

  if (i = left.length) {
    return [...arr, ...right] // check this
  } else {
    return [...arr, ...left]
  }

}

module.exports = mergeSort;