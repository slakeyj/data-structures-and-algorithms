'use strict';

const reverseArray = (arr) => {
  let startIndex = 0;
  let endIndex = arr.length - 1;
  while (startIndex !== endIndex) {
    let tempValue = arr[startIndex];
    arr[startIndex] = arr[endIndex];
    arr[endIndex] = tempValue;
    startIndex++;
    endIndex--;
  }
  return arr;
}

console.log(reverseArray([0, 1, 2, 3, 4]));