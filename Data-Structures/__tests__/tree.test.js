const { Node, BinaryTree } = require('../tree/tree')


describe('tree', () => {

  it('can instantiate an empty tree', () => {
    const binaryTree = new BinaryTree();
    expect(binaryTree.root).toBeUndefined;
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
      expect(binaryTree.root.left.value).toEqual(3);
      expect(binaryTree.root.right.value).toEqual(5);
      expect(binaryTree.root.left.left.value).toEqual(2);
      expect(binaryTree.root.right.right.value).toEqual(8);
    })
  })

  describe('preOrder()', () => {
    let binaryTree;
    beforeEach(() => {
      binaryTree = new BinaryTree();
      binaryTree.insert(12)
      binaryTree.insert(2)
      binaryTree.insert(15)
    })

    it('looks at the root first', () => {
      const binaryTreePreOrder = binaryTree.preOrder(binaryTree.root)
      expect(binaryTreePreOrder[0]).toEqual(12);
    })

    it('traverses to the left side next', () => {
      const binaryTreePreOrder = binaryTree.preOrder(binaryTree.root)
      expect(binaryTreePreOrder[1]).toEqual(2);
    })

    it('traverses to the right side last', () => {
      const binaryTreePreOrder = binaryTree.preOrder(binaryTree.root)
      expect(binaryTreePreOrder[2]).toEqual(15);

    })
  })

  describe('inOrder()', () => {
    let binaryTree;
    beforeEach(() => {
      binaryTree = new BinaryTree();
      binaryTree.insert(12)
      binaryTree.insert(2)
      binaryTree.insert(15)
    })

    it('looks at the left node first', () => {
      const inOrderTree = binaryTree.inOrder(binaryTree.root)
      expect(inOrderTree[0]).toEqual(2);
    })

    it('traverses to the root next', () => {
      const inOrderTree = binaryTree.inOrder(binaryTree.root)
      expect(inOrderTree[1]).toEqual(12);
    })

    it('traverses to the right side last', () => {
      const inOrderTree = binaryTree.inOrder(binaryTree.root)
      expect(inOrderTree[2]).toEqual(15);
    })

  })

  describe('postOrder()', () => {
    let binaryTree;
    beforeEach(() => {
      binaryTree = new BinaryTree();
      binaryTree.insert(12)
      binaryTree.insert(2)
      binaryTree.insert(15)
    })

    it('looks at the left node first', () => {
      const postOrderTree = binaryTree.postOrder(binaryTree.root)
      expect(postOrderTree[0]).toEqual(2);
    })

    it('traverses to right next', () => {
      const postOrderTree = binaryTree.postOrder(binaryTree.root)
      expect(postOrderTree[1]).toEqual(15);
    })

    it('traverses to the root last', () => {
      const postOrderTree = binaryTree.postOrder(binaryTree.root)
      expect(postOrderTree[2]).toEqual(12);

    })
  })
})