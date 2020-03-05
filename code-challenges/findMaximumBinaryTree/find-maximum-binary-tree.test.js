
const { Node, BinaryTree } = require('../../Data-Structures/tree/tree');
const findMaximumValue = require('./find-maximum-binary-tree')


describe('findMaximumValue', () => {
  let binaryTree;

  beforeEach(() => {
    binaryTree = new BinaryTree();

  })
  it('returns null if the tree contains no nodes', () => {
    expect(findMaximumValue(binaryTree.root)).toEqual(null)

  })

  it('returns the maximum value when there is 1 node in the tree', () => {
    binaryTree.insert(2);
    expect(findMaximumValue(binaryTree.root)).toEqual(2);
  })

  it('returns the maximum value when there are multiple nodes in the tree', () => {
    binaryTree.insert(2);
    binaryTree.insert(5);
    binaryTree.insert(3);
    binaryTree.insert(7);
    binaryTree.insert(12);
    expect(findMaximumValue(binaryTree.root)).toEqual(12);
  })
})