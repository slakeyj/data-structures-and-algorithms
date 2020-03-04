const { Node, BinaryTree } = require('../../Data-Structures/tree/tree');
const breadthFirst = require('./breadth-first')

describe('breadthFirst()', () => {
  let binaryTree;

  beforeEach(() => {
    binaryTree = new BinaryTree();
  })

  it('returns null if the root is null', () => {
    expect(breadthFirst(binaryTree)).toEqual(null);
  })

  it('returns with 1 value', () => {
    binaryTree.insert(6);
    expect(breadthFirst(binaryTree)).toEqual([6])
  })

  it('returns a list of positive numbers in the appropriate order', () => {
    binaryTree.insert(6);
    binaryTree.insert(3);
    binaryTree.insert(9);
    binaryTree.insert(12);

    expect(breadthFirst(binaryTree)).toEqual([6, 3, 9, 12])
  })

})