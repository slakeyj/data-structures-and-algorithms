
const { Node, BinaryTree } = require('../tree/tree')


const treeIntersection = (treeOne, treeTwo) => {
  let allIntersections = []

  const orderTreeOne = treeOne.preOrder(treeOne.root)
  const orderTreeTwo = treeTwo.preOrder(treeTwo.root)

  let setOne = new Set(orderTreeOne);

  let setTwo = new Set(orderTreeTwo);
  console.log('setone, setTwo', setOne, setTwo);
  const intersection = new Set([...setOne].filter(value => setTwo.has(value)))
  console.log('intersection', intersection)
  console.log('intersection entries', intersection.values())
  return intersection.values();
}


const preOrder = root => {
  const collection = [];
  if (root === null) {
    return;
  }
  collection.push(root.value);
  if (root.left) {
    preOrder(root.left);
  }

  if (root.right) {
    preOrder(root.right);
  }
  return collection;
}

module.exports = treeIntersection;