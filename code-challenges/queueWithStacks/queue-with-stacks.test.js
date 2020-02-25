const PseudoQueue = require('./queue-with-stacks')



describe('PseudoQueue', () => {
  let pseudoQueue
  beforeEach(() => {
    pseudoQueue = new PseudoQueue();
    pseudoQueue.enqueue(1);
    pseudoQueue.enqueue(2);
    pseudoQueue.enqueue(3);
  })


  it('can enqueue values using Stacks push()', () => {
    expect(pseudoQueue).toEqual([1, 2, 3])
  })


})