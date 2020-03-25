
const treeIntersection = (treeOne, treeTwo) => {

  if (!treeOne.root || !treeTwo.root) {
    return;
  }
  const orderTreeOne = treeOne.preOrder(treeOne.root)
  const orderTreeTwo = treeTwo.preOrder(treeTwo.root)

  let setTwo = new Set(orderTreeTwo);

  return orderTreeOne.filter(value => setTwo.has(value))
}


module.exports = treeIntersection;






