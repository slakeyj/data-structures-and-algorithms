class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root) {
    this.root = root;
  }

  insert(value) {
    if (!this.root) {
      this.root = new Node(value, null, null);
      return;
    }
    if (value < this.root.value && this.root.left) {
      // need to send left node along with value
      this.insert(this.root.left);

    } else if (value < this.root.value && !this.root.left) {
      this.root.left = new Node(value, null, null);
    }

    if (value > this.root.value && this.root.right) {
      // need to send right node along with value
      this.insert(this.root.right);
    } else if (value > this.root.value && !this.root.right) {
      this.root.right = new Node(value, null, null);
    }

  }


  preOrder(root) {
    const collection = [];
    if (root === null) {
      return;
    }
    collection.push(root.value);
    return collection;
  }
}

module.exports = { Node, BinaryTree }