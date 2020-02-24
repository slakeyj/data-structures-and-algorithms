const mergeLists = require('./ll-merge.js');
const { LinkedList, Node } = require('../../Data-Structures/linkedList/linked-list')



describe('mergeLists', () => {
  let linkedListOne;
  let linkedListTwo;
  beforeEach(() => {
    linkedListOne = new LinkedList();
    linkedListTwo = new LinkedList();
  })
  it('should merge two linked lists of the same size', () => {

    linkedListOne.append(1);
    linkedListOne.append(3);

    linkedListTwo.append(2);
    linkedListTwo.append(4);
    const merged = mergeLists(linkedListOne, linkedListTwo);
    expect(merged.head.value).toEqual(1);
    expect(merged.head.next.value).toEqual(2);
    expect(merged.head.next.next.value).toEqual(3);
    expect(merged.head.next.next.next.value).toEqual(4);

  })

  it('should merge two linked lists of size one', () => {
    linkedListOne.append(1);
    linkedListTwo.append(2);
    const merged = mergeLists(linkedListOne, linkedListTwo);
    expect(merged.head.value).toEqual(1);
    expect(merged.head.next.value).toEqual(2);
  })


  it('should merge two linked lists of different size', () => {
    linkedListOne.append(1);
    linkedListTwo.append(2);
    linkedListOne.append(3);
    const merged = mergeLists(linkedListOne, linkedListTwo);
    expect(merged.head.value).toEqual(1);
    expect(merged.head.next.value).toEqual(2);
    expect(merged.head.next.next.value).toEqual(3);
  })
})