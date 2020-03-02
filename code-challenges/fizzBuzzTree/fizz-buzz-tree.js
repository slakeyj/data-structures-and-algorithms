

const fizzBuzzTree = tree => {

  const collection = [];

  const inOrder = root => {
    if (root === null) {
      return;
    }

    if (root.value % 3 === 0 && root.value % 5 === 0) {
      root.value = 'FizzBuzz';
    } else if (root.value % 3 === 0) {
      root.value = 'Fizz';
    } else if (root.value % 5 === 0) {
      root.value = 'Buzz';
    } else {
      root.value = root.value.toString();
    }
    if (root.left) {
      inOrder(root.left);
    }
    collection.push(root.value);

    if (root.right) {
      inOrder(root.right);
    }
    return collection;

  }

  const fizzBuzzed = inOrder(tree.root)
  console.log('collection', collection);
  return fizzBuzzed;

}

module.exports = fizzBuzzTree