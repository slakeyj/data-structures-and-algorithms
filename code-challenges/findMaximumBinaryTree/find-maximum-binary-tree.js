const { Stack, Queue } = require('../../Data-Structures/stacksAndQueues/stacks-and-queues')

const findMaximumValue = root => {
  let maxValue;
  if (root === null) {
    return null;
  }
  maxValue = root.value;

  const breadth = new Queue();
  breadth.enqueue(root);
  while (breadth.peek()) {
    currentNode = breadth.dequeue();
    maxValue = findMaxHelper(maxValue, currentNode.value);

    if (currentNode.left) {
      breadth.enqueue(currentNode.left);
    }

    if (currentNode.right) {
      breadth.enqueue(currentNode.right);
    }
  }
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