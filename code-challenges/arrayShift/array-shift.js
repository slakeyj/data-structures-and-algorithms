'use strict';

const insertShiftArray = (arr, num) => {
  let numberToInsert = num;
  let numberToStore;
  const arrayMidPoint = findMidPoint(arr);
  for (let i = arrayMidPoint; i < arr.length; i++) {
    numberToStore = arr[i]
    arr[i] = numberToInsert;
    console.log('arr i', arr[i])
    numberToInsert = numberToStore;
  }
  arr.push(numberToInsert);
  return arr;
}

const findMidPoint = arr => {
  return arr.length % 2 === 0 ? arr.length / 2 : Math.round(arr.length / 2);
}

module.exports = insertShiftArray;