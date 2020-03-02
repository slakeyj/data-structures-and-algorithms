const fizzBuzzTree = require('./fizz-buzz-tree')
const { Node, BinaryTree } = require('../../Data-Structures/tree/tree')


describe('fizzBuzzTree()', () => {
  let binaryTree;

  beforeEach(() => {
    binaryTree = new BinaryTree();

  })

  it('changes the value to "Fizz" when the value is divisble by 3', () => {
    binaryTree.insert(3);
    binaryTree.insert(6);
    binaryTree.insert(9);
    binaryTree.insert(12);

    const fizzBuzzIt = fizzBuzzTree(binaryTree);
    expect(fizzBuzzIt).toEqual(['Fizz', 'Fizz', 'Fizz', 'Fizz']);
  })


  it('changes the value to "Buzz" when the value is divisble by 5', () => {
    binaryTree.insert(3);
    binaryTree.insert(5);
    binaryTree.insert(10);
    binaryTree.insert(12);

    const fizzBuzzIt = fizzBuzzTree(binaryTree);
    expect(fizzBuzzIt).toEqual(['Fizz', 'Buzz', 'Buzz', 'Fizz']);
  })

  it('changes the value to "FizzBuzz" when the value is divisble by 5 and 3', () => {
    binaryTree.insert(3);
    binaryTree.insert(5);
    binaryTree.insert(10);
    binaryTree.insert(15);
    binaryTree.insert(30);

    const fizzBuzzIt = fizzBuzzTree(binaryTree);
    expect(fizzBuzzIt).toEqual(['Fizz', 'Buzz', 'Buzz', 'FizzBuzz', 'FizzBuzz']);
  })

  it('turns the number into a string if the number is neither divisible by 3 or 5', () => {
    binaryTree.insert(2);
    binaryTree.insert(5);
    binaryTree.insert(7);
    binaryTree.insert(11);
    binaryTree.insert(30);

    const fizzBuzzIt = fizzBuzzTree(binaryTree);
    expect(fizzBuzzIt).toEqual(['2', 'Buzz', '7', '11', 'FizzBuzz']);
  })

  it('returns undefined when given an empty binary tree', () => {
    expect(fizzBuzzTree(binaryTree)).toBeUndefined();
  })

})