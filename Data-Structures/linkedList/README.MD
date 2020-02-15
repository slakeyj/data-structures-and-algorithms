# Singly Linked List
- Create a Node and LinkedList class that can handle a singly linked list.

## Challenge
- Create a Node and LinkedList CLass.  Withink the LinkList class created the following methods: insert(), include(), and toString()

## Approach & Efficiency
Big O:
- insert: O(1)
- includes: O(n)
- toString: O(n)

## API
- insert: takes in a value and adds a new node with that value to the head
- includes: takes a value in as an argument and returns a boolean result depending on whether that value exists in the linked list
- toString: takes in no arguments. It returns a string representing all the values that exist in a linked list formatted as "{ a } -> { b } -> { c } -> NULL"