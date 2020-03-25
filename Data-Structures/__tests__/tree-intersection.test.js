const treeIntersection = require('../treeIntersection/tree-intersection')
const { Node, BinaryTree } = require('../tree/tree')

describe('treeIntersection()', () => {
  let binaryTreeOne;
  let binaryTreeTwo;

  beforeEach(() => {
    binaryTreeOne = new BinaryTree();
    binaryTreeTwo = new BinaryTree();
  })

  it('returns undefined if either tree has no values', () => {
    expect(treeIntersection(binaryTreeOne, binaryTreeTwo)).toBeUndefined();
  })

  it('returns the value if both trees have one value that is the same', () => {
    binaryTreeOne.insert(2);
    binaryTreeTwo.insert(2);

    expect(treeIntersection(binaryTreeOne, binaryTreeTwo)).toEqual([2])
  })


  it('returns the intersecting values when there are multiples values in each tree', () => {
    binaryTreeOne.insert(2);
    binaryTreeOne.insert(3);
    binaryTreeOne.insert(4);
    binaryTreeOne.insert(5);
    binaryTreeTwo.insert(2);
    binaryTreeTwo.insert(5);
    binaryTreeOne.insert(6);

    expect(treeIntersection(binaryTreeOne, binaryTreeTwo)).toEqual([2, 5])
  })
})