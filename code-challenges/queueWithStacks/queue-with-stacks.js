const Stack = require('../../Data-Structures/stacksAndQueues/stacks-and-queues.js');

// stack instances only have push, pop, and peek


class PseudoQueue {
  constructor() {
    this.stackOne = new Stack();
    this.stackTwo = new Stack()
    // this.storage = []

  }

  enqueue(value) {
    return this.stackOne.push(value);
  }

  dequeue() {
    this.stackTwo.pop(this.stackOne);

  }
}

module.exports = PseudoQueue;