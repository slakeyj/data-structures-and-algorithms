const { Stack, Queue } = require('../../Data-Structures/stacksAndQueues/stacks-and-queues')  //stack?


const breadthFirst = tree => {
  const root = tree.root;
  const collection = [];

  if (root === null) {
    return null;
  }
  let currentNode;

  const breadth = new Queue();
  breadth.enqueue(root);
  while (breadth.peek()) {
    currentNode = breadth.dequeue();
    collection.push(currentNode.value)

    if (currentNode.left) {
      breadth.enqueue(currentNode.left);
    }

    if (currentNode.right) {
      breadth.enqueue(currentNode.right);
    }
  }
  return collection;
}


function RLOT(tree) {
  if (tree === null) return null
  if (tree.root === null) return null
  let queue = []
  let output = []
  let current = tree.root
  queue.unshift(current)
  while (queue.length !== 0) {
    current = queue.pop()
    output.unshift(current.value)
    if (current.right !== null) queue.unshift(current.right)
    if (current.left !== null) queue.unshift(current.left)
  }
  return output
}


module.exports = breadthFirst;