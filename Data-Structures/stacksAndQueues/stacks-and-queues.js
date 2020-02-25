class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}


// what am I doing with top
class Stack {
  constructor() {
    this.top = null;
    this.storage = [];
  }

  peek() {

    if (this.storage.length === 0) {
      return undefined;
    } else {
      return this.storage[0].value;
    }

  }

  push(value) {
    const node = new Node(value, null);
    node.next = this.front;
    this.front = node;
    return this.storage.unshift(this.front);
  }

  pop() {
    const removedNode = this.storage.shift();
    return removedNode.value;
  }

  isEmpty() {
    return this.storage.length > 0 ? true : false;
  }
}

// what am I doing with front?
class Queue {
  constructor() {
    this.front = null;
    this.storage = [];
  }

  enqueue(value) {
    const newNode = new Node(value, null);
    this.front = newNode
    return this.storage.push(newNode);
  }


  dequeue() {

    if (this.storage.length === 0) {
      return undefined;
    }
    const removedNode = this.storage.shift();
    return removedNode.value;
  }

  peek() {
    if (this.storage.length === 0) {
      return undefined;
    }
    const front = this.storage[0];
    return front.value
  }

  isEmpty() {
    return this.storage.length > 0 ? true : false;
  }

}



module.exports = { Stack, Queue, Node }