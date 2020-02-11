
const insertShiftArray = (array, numberToInsert) => {
  let tempNumber = numberToInsert;
  const midpointOfArray = findMidPoint(array);
  for (let i = Math.floor(midpointOfArray); i < array.length; i++) {
    tempNumber = array[i];
    array[i] = numberToInsert;
    numberToInsert = tempNumber;
  }
  array.push(tempNumber);
  return array;
}

const findMidPoint = arr => {
  return arr.length % 2 === 0 ? arr.length / 2 : Math.round(arr.length / 2);
}

module.exports = insertShiftArray;