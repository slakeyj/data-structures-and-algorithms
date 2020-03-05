
const findMaximumValue = root => {
  let maxValue;
  if (root === null) {
    return null;
  }
  // need to set to root just once, resets to root every time
  maxValue = root.value;
  if (root.left) {
    maxValue = findMaxHelper(maxValue, root.left.value);
    findMaximumValue(root.left);
  }

  if (root.right) {
    maxValue = findMaxHelper(maxValue, root.right.value);
    findMaximumValue(root.right);
  }
  console.log('max val', maxValue)
  return maxValue;

}

const findMaxHelper = (maxVal, valToCompare) => {
  if (valToCompare > maxVal) {
    maxVal = valToCompare;
  }

  return maxVal;
}

// console.log('find max', findMaxHelper(2, 5))

module.exports = findMaximumValue;