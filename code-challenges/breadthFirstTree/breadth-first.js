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



module.exports = breadthFirst;