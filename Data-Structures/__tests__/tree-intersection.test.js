const treeIntersection = require('../treeIntersection/tree-intersection')
const { Node, BinaryTree } = require('../tree/tree')

describe('treeIntersection()', () => {
  let binaryTreeOne;
  let binaryTreeTwo;

  beforeEach(() => {
    binaryTreeOne = new BinaryTree();
    binaryTreeTwo = new BinaryTree();
  })

  it('returns null if either tree has no values', () => {
    expect(treeIntersection(binaryTreeOne, binaryTreeTwo)).toBeUndefined();
  })

  it('returns the value if both trees have one value that is the same', () => {
    binaryTreeOne.insert(2);
    binaryTreeTwo.insert(2);
    expect(treeIntersection(binaryTreeOne, binaryTreeTwo)).toEqual([2])
  })
})