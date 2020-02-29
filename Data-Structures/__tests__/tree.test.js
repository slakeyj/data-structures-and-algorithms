const { Node, BinaryTree } = require('../tree/tree')


describe('tree', () => {

  it('can instantiate an empty tree', () => {
    const binaryTree = new BinaryTree();
    expect(binaryTree.root).toBeUndefined;
  })


  it('can instantiate a tree with a single root node', () => {
    const node = new Node(12, 2, 4)
    const binaryTree = new BinaryTree(node);
    expect(binaryTree.root.value).toEqual(12);
    expect(binaryTree.root.left).toEqual(2);
    expect(binaryTree.root.right).toEqual(4);
  })

  it('can add a left child and right child with a single root node', () => {
    const node = new Node(12, 2, 4)
    const binaryTree = new BinaryTree(node);
    expect(binaryTree.root.left).toEqual(2);
    expect(binaryTree.root.right).toEqual(4);
  })

  describe('insert', () => {
    it('inserts a new node', () => {
      const binaryTree = new BinaryTree();
      binaryTree.insert(3)
      expect(binaryTree.root.value).toEqual(3)
    })

    it('can insert two child nodes', () => {
      const binaryTree = new BinaryTree();
      binaryTree.insert(4);
      binaryTree.insert(3);
      binaryTree.insert(5);

      console.log('binary tree', binaryTree);
      expect(binaryTree.root.left.value).toEqual(3);
      expect(binaryTree.root.right.value).toEqual(5);
    })


    it('can insert multiple child nodes', () => {
      const binaryTree = new BinaryTree();
      binaryTree.insert(4);
      binaryTree.insert(3);
      binaryTree.insert(5);
      binaryTree.insert(2);

      binaryTree.insert(8);

      console.log('binary tree', binaryTree);
      expect(binaryTree.root.left.value).toEqual(3);
      expect(binaryTree.root.right.value).toEqual(5);
      expect(binaryTree.root.left.left.value).toEqual(2);
      expect(binaryTree.root.right.right.value).toEqual(5);
    })
  })

  describe('preOrder()', () => {


    it('looks at the root first', () => {
      const node = new Node(12, 2, 4)
      const binaryTree = new BinaryTree(node);
      const binaryTreePreOrder = binaryTree.preOrder(node)
      expect(binaryTreePreOrder[0]).toEqual(12);
    })

    it('traverses to the left side first', () => {

    })
  })


})