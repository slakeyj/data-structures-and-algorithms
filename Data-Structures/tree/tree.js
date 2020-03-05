class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;

  }
}

class BinaryTree {
  constructor() {
    this.root = null;
    this.collection = [];
  }

  insert(value) {
    if (!this.root) {
      this.root = new Node(value, null, null);
      return;
    }
    let current = this.root;

    while (current) {
      if (value < current.value && current.left) {
        current = current.left;
      } else if (value < current.value && !current.left) {
        current.left = new Node(value, null, null);
        return;
      }

      if (value > current.value && current.right) {
        current = current.right;
      } else if (value > current.value && !current.right) {
        current.right = new Node(value, null, null);
        return;
      }
    }
  }

  preOrder(root) {

    if (root === null) {
      return
    }
    this.collection.push(root.value);
    if (root.left) {
      this.preOrder(root.left);
    }

    if (root.right) {
      this.preOrder(root.right);
    }
    return this.collection;
  }

  inOrder(root) {
    if (root === null) {
      return
    }
    if (root.left) {
      this.inOrder(root.left);
    }
    this.collection.push(root.value);

    if (root.right) {
      this.inOrder(root.right);
    }
    return this.collection;

  }


  postOrder(root) {
    if (root === null) {
      return
    }
    if (root.left) {
      this.postOrder(root.left);
    }

    if (root.right) {
      this.postOrder(root.right);
    }
    this.collection.push(root.value);
    return this.collection;

  }

  isBinarySearchTree(node, leftBoundary, rightBoundary) {
    if (node === null) {
      return true;
    }
    if (leftBoundary && node.value < leftBoundary
      || rightBoundary && node.value > rightBoundary) {
      return false;
    }
    return this.isBinarySearchTree(node.left, leftBoundary, node.value)
      && this.isBinarySearchTree(node.right, node.value, rightBoundary);
  }


}

module.exports = { Node, BinaryTree }
