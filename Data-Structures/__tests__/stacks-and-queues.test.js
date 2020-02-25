const { Stack, Queue } = require('../stacksAndQueues/stacks-and-queues')

describe('Stack', () => {

  it('can successfully instantiate an empty stack', () => {
    const testStack = new Stack();
    expect(testStack.length()).toEqual(0);
  })

  describe('peek()', () => {

    describe('peek() when the stack is empty', () => {
      const testStack = new Stack();

      it('returns undefined', () => {
        expect(testStack.peek()).toBeUndefined();
      })
    })

    describe('peek() when storage is populated', () => {
      let testStack;

      beforeEach(() => {
        testStack = new Stack();
        testStack.push(5);
        testStack.push(4);
      });

      it('returns the top value of a stack', () => {
        expect(testStack.peek()).toEqual(4);
      })

      it('does not change the length of the storage', () => {
        testStack.peek();
        expect(testStack.length()).toEqual(2);
      })
    })
  })


  describe('push()', () => {
    describe('push() when storage is populated', () => {
      let testStack;

      beforeEach(() => {
        testStack = new Stack();
        testStack.push(5);
        testStack.push(4);
      })

      it('returns the new length of the array', () => {
        expect(testStack.push(3)).toEqual(testStack.length());
      })

      it('adds the new value to the top of the stack', () => {
        expect(testStack.peek()).toEqual(4);
      })
    })

    describe('it can push multiple values', () => {
      const testStack = new Stack();
      testStack.push(3)
      testStack.push(2)
      testStack.push(1)
      expect(testStack.storage.length).toEqual(3);

    })
  })


  describe('pop()', () => {
    describe('pop() when storage is populated', () => {
      let testStack;

      beforeEach(() => {
        testStack = new Stack();
        testStack.push(5);
        testStack.push(4);
      })

      it('removes and returns the top item in a stack', () => {
        expect(testStack.pop()).toEqual(4);
      })

      it('decreases the size of the stack by one', () => {
        testStack.pop();
        expect(testStack.length()).toEqual(1);
      })
    })


    describe('pop() when storage is empty', () => {
      let testStack;

      beforeEach(() => {
        testStack = new Stack();
      });

      it('returns undefined on an empty stack', () => {
        expect(testStack.pop()).toEqual(undefined)
      })

      it('does not alter the length of the stack', () => {
        expect(testStack.length()).toEqual(0);
      })
    })

    describe('emptying an array with pop()', () => {
      let testStack;

      beforeEach(() => {
        testStack = new Stack();
        testStack.push(5);
        testStack.push(4);
      })

      it('can successfully empty an array after multiple pops', () => {
        testStack.pop();
        testStack.pop();
        expect(testStack.length()).toEqual(0);
      })
    })
  })

  describe('isEmpty()', () => {

    describe('when the stack is populated', () => {
      let testStack;

      beforeEach(() => {
        testStack = new Stack();
        testStack.push(5);
        testStack.push(4);
      })

      it('returns false', () => {
        expect(testStack.isEmpty()).toBeFalsy();
      })
    })

    describe('when the stack is empty', () => {
      let testStack;

      beforeEach(() => {
        testStack = new Stack();
      })
      it('returns true', () => {
        expect(testStack.isEmpty()).toBeTruthy();
      })
    })
  })
})



describe('Queue', () => {
  it('can successfully instantiate an empty queue', () => {
    const testQueue = new Queue();
    expect(testQueue.length()).toEqual(0);
  })

  describe('enqueue', () => {
    let testQueue;

    beforeEach(() => {
      testQueue = new Queue();
      testQueue.enqueue(1);
      testQueue.enqueue(2);
      testQueue.enqueue(3);
    })

    it('returns the new length of the queue', () => {
      expect(testQueue.enqueue(2)).toEqual(4);
    })

    it('pushes the value into the queue', () => {
      expect(testQueue.length()).toEqual(3);
    })
  })


  describe('dequeue', () => {

    describe('dequeue when the queue is populated', () => {
      let testQueue;

      beforeEach(() => {
        testQueue = new Queue();
        testQueue.enqueue(4);
        testQueue.enqueue(5);
      })

      it('returns the dequeued value', () => {
        expect(testQueue.dequeue()).toEqual(4);
      })

      it('removes the value at the front of the queue and shifts the other values down an index', () => {
        testQueue.dequeue();
        expect(testQueue.length()).toEqual(1);
      })

      it('can successfully empty a queue after multiple dequeues', () => {
        testQueue.dequeue();
        testQueue.dequeue();
        expect(testQueue.length()).toEqual(0);
      })
    })

    describe('dequeue when the queue is not populated', () => {
      let testQueue;

      beforeEach(() => {
        testQueue = new Queue();
      });

      it('returns undefined', () => {
        expect(testQueue.dequeue()).toEqual(undefined);
      })

      it('has a length of 0', () => {
        expect(testQueue.length()).toEqual(0);
      })
    })
  })

  describe('peek()', () => {

    describe('when the queue is populated', () => {
      let testQueue;

      beforeEach(() => {
        testQueue = new Queue();
        testQueue.enqueue(4);
        testQueue.enqueue(5);
      });

      it('returns the first node value in the queue', () => {
        expect(testQueue.peek()).toEqual(4);
      })

      it('does not alter the length of the queue', () => {
        testQueue.peek();
        expect(testQueue.length()).toEqual(2);
      })
    })

    describe('when the queue is empty', () => {
      let testQueue;

      beforeEach(() => {
        testQueue = new Queue();
      });

      it('should return undefined', () => {
        expect(testQueue.peek()).toBeUndefined();
      })
    })
  })

  describe('isEmpty()', () => {

    describe('when the queue is populated', () => {
      let testQueue;

      beforeEach(() => {
        testQueue = new Queue();
        testQueue.enqueue(4);
        testQueue.enqueue(5);
      });

      it('returns false', () => {
        expect(testQueue.isEmpty()).toBeFalsy();
      })
    })

    describe('when the queue is empty', () => {
      let testQueue;

      beforeEach(() => {
        testQueue = new Queue();
      });

      it('returns true', () => {
        expect(testQueue.isEmpty()).toBeTruthy();
      })
    })
  })
})