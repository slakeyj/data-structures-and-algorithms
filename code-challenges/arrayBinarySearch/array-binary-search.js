const BinarySearch = (array, numberToFind) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === numberToFind) {
      return i;
    }
  }
  return -1;
}


console.log(BinarySearch([1, 2, 3, 4, 5,], 8));

module.exports = BinarySearch;