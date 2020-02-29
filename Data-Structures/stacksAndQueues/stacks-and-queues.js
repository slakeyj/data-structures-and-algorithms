

class Stack {
  constructor() {
    this.storage = [];
  }

  length() {
    return this.storage.length;
  }

  peek() {
    return this.storage[0];
  }

  push(value) {
    return this.storage.unshift(value);
  }

  pop() {
    return this.storage.shift();
  }

  isEmpty() {
    return this.storage.length === 0;
  }
}

class Queue {
  constructor() {
    this.storage = [];
  }

  length() {
    return this.storage.length;
  }

  enqueue(value) {
    return this.storage.push(value);
  }

  dequeue() {
    if (this.storage.length === 0) {
      return undefined;
    }
    return this.storage.shift();
  }

  peek() {
    return this.storage[0];
  }

  isEmpty() {
    return this.storage.length === 0;
  }

}



module.exports = { Stack, Queue }