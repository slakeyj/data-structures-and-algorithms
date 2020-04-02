const { Stack, Queue } = require('../../stacksAndQueues/stacks-and-queues')

const depthFirst = (graph, root) => {
  if (root === undefined) {
    return null;
  }
  const visited = new Set();
  const stack = new Stack();
  stack.push(root);
  visited.add(root)
  while (stack.peek()) {
    console.log('inwhile')
    let top = stack.peek();
    let neighbors = graph.adjacencyList.get(top);
    neighbors.forEach(neighbor => {

      let key = Object.keys(neighbor)
      if (!visited.has(key)) {
        console.log('in if')
        visited.add(neighbor);
        stack.push(key);
        console.log('vsited', visited)
        top = neighbor
      } else {
        stack.pop(top);
      }
    })
  }

}

module.exports = depthFirst