class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head;
  }

  // adds value to the end of linked list
  append(value) {
    const node = new Node(value, null);
    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next != null) {
      current = current.next
    }
    current.next = node;
  }

  // inserts newVal before given value in linked list
  insertBefore(value, newVal) {
    const newNode = new Node(newVal, null);
    let current = this.head;
    console.log('current', current);
    if (this.head.value === value) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    while (current.next != null) {
      // if next value is equal to value you're looking for, insert new value to replace it and bump it
      if (current.next.value === value) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }
  }

  // inserts a new value after the given value
  insertAfter(value, newVal) {
    const newNode = new Node(newVal, null);
    let current = this.head;

    while (current != null) {
      // if current value is equal to value, set the next value to the new node
      if (current.value === value) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }
  }


  // takes in a value and adds a new node with that value to the head
  insert(value) {
    const node = new Node(value, null);
    node.next = this.head;
    this.head = node;
  }

  // returns boolean based on whether a value is found in the linked list
  includes(value) {
    let current = this.head;
    if (current === undefined) {
      return false;
    }
    while (current.next !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.next
    }
    return false;
  }

  // returns a string representing all the values that exist in a linked list
  toString() {
    let collection = '';
    let current = this.head;
    while (current != null) { // current !== null || current !== undefined
      collection += `{ ${current.value} } -> `
      current = current.next;
    }
    collection += 'NULL'
    return collection;
  }

  findKthValue(k) {
    let count = 0;
    let current = this.head;
    while (current != null) {
      if (count === k) {
        return current.value;
      } else {
        current = current.next;
        count++;
      }
    }
    if (k > count) {
      throw 'That value is too high, please try again.'
    }
  }
}

module.exports = { LinkedList, Node };