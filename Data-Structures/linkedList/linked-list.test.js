const { LinkedList, Node } = require('./linked-list.js')


describe('linked list', () => {


  it('should be able to instantiate an empty linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList.head).toBeUndefined();
  })

  it('should be able to insert any value at the head', () => {
    const linkedList = new LinkedList();
    linkedList.insert(44)
    expect(linkedList.head.value).toEqual(44)
  })


  it('the head property will properly point to the first node in the linked list', () => {
    const node = new Node(40, null);
    const linkedList = new LinkedList(node);
    // toBe is more than just equal, it means it is the Exact same one
    expect(linkedList.head).toBe(node);
  })

  it('can properly insert multiple nodes into the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert(3);
    linkedList.insert(4);
    expect(linkedList.head.value).toEqual(4);
    expect(linkedList.head.next.value).toEqual(3);
  })

  it('will return true when finding a value within the linked list that exists', () => {
    const linkedList = new LinkedList();
    linkedList.insert(40);
    expect(linkedList.includes(40)).toBeTruthy();
  })

  it('will return false when searching for a value in the linked list that does not exist', () => {
    const linkedList = new LinkedList();
    expect(linkedList.includes(40)).toBeFalsy();
  })

  it('can properly return a collection of all the values that exist in the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert(5);
    linkedList.insert(10);
    linkedList.insert(15);
    expect(linkedList.toString()).toEqual("{ 15 } -> { 10 } -> { 5 } -> NULL");
  })
});