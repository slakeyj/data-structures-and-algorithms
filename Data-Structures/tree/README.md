# Trees
* Create a BinaryTree with methods for each type of depth traversal: preOrder, inOrder, and postOrder

## Challenge
* Create a Node class that has propeties for the value stores in the node, the left child node, and the right child node
* Create  BinaryTree class with methods for each depth traversal called preOrder, inOrder, and postOrder, which returns an array of the values, ordered appropriately


## Approach & Efficiency
* I created an insert method so I could create binary trees to test my traversal methods
* Implemented each traversal method the same way, the only difference being at which point I push the value into the array.
* Time: O(n)
* Space: O(n)

## API
* preOrder traversal: starts at the root, goes left, then goes right
* inOrder traversal: goes left, up to the root, then right
* postOrdre: goes left, then right, then up to the root