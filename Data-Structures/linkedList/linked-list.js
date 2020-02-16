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

  insert(value) {
    const node = new Node(value, null);
    node.next = this.head;
    this.head = node;
  }

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
}

module.exports = { LinkedList, Node };