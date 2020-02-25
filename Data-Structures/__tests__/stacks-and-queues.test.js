const { Stack, Queue, Node } = require('../stacksAndQueues/stacks-and-queues')

describe('Stack', () => {

  it('can successfully instantiate an empty stack', () => {
    const testStack = new Stack();
    expect(testStack.storage.length).toEqual(0);
    expect(testStack.top).toEqual(null);
  })

  describe('peek()', () => {

    describe('peek() when the stack is empty', () => {
      const testStack = new Stack();

      it('returns undefined', () => {
        expect(testStack.peek()).toBeUndefined();
      })
    })

    describe('peek() when storage is populated', () => {
      const testStack = new Stack();
      testStack.storage = [{ "next": null, "value": 4 }, { "next": null, "value": 5 }];

      it('returns the top value of a stack', () => {
        expect(testStack.peek()).toEqual(testStack.storage[0].value);
      })

      it('does not change the length of the storage', () => {
        expect(testStack.storage.length).toEqual(2);
      })
    })
  })


  describe('push()', () => {
    describe('push() when storage is populated', () => {
      const testStack = new Stack();
      testStack.storage = [{ "next": null, "value": 4 }, { "next": null, "value": 5 }];
      it('returns the new length of the array', () => {
        expect(testStack.push(3)).toEqual(testStack.storage.length);
      })

      it('adds the new value to the top of the stack', () => {
        // console.log('test stack storage', testStack.storage)
        expect(testStack.storage[0].value).toEqual(3);
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
      const testStack = new Stack();
      testStack.storage = [{ "next": null, "value": 4 }, { "next": null, "value": 5 }];

      it('removes and returns the top item in a stack', () => {
        expect(testStack.pop()).toEqual(4);
      })

      it('decreases the size of the stack by one', () => {
        expect(testStack.storage.length).toEqual(1);
      })
    })


    describe('pop() when storage is empty', () => {
      const testStack = new Stack();

      it('returns undefined on an empty stack', () => {
        expect(testStack.storage.pop()).toEqual(undefined)
      })

      it('does not alter the length of the stack', () => {
        expect(testStack.storage.length).toEqual(0);
      })
    })

    describe('emptying an array with pop()', () => {
      it('can successfully empty an array after multiple pops', () => {
        const testStack = new Stack();
        testStack.storage = [{ "next": null, "value": 4 }, { "next": null, "value": 5 }];
        testStack.pop();
        testStack.pop();
        expect(testStack.storage.length).toEqual(0);
        expect(testStack.storage[0]).toBeUndefined();
      })
    })
  })

  describe('isEmpty()', () => {

    describe('isEmpty() when the stack is populated', () => {
      const testStack = new Stack();
      testStack.storage = [{ "next": null, "value": 4 }, { "next": null, "value": 5 }];
      it('returns true', () => {
        expect(testStack.isEmpty()).toBeTruthy();
      })
    })

    describe('isEmpty() when the stack is empty', () => {
      const testStack = new Stack();
      it('returns false', () => {
        expect(testStack.isEmpty()).toBeFalsy();
      })
    })
  })
})



describe('Queue', () => {
  it('can successfully instantiate an empty queue', () => {
    const testQueue = new Queue();
    expect(testQueue.storage.length).toEqual(0);
  })

  describe('enqueue', () => {
    const testQueue = new Queue();
    testQueue.storage = [1, 2, 3];

    it('returns the new length of the queue', () => {
      expect(testQueue.enqueue(2)).toEqual(4);
    })

    it('pushes the value to the end of the queue', () => {
      expect(testQueue.storage).toEqual([1, 2, 3, { "next": null, "value": 2 }])
    })

    it('can successfully enqueue multiple values into a queue', () => {
      const testQueue = new Queue();
      testQueue.storage = [1, 2, 3];
      // console.log('testqueue storage before', testQueue.storage)
      testQueue.enqueue(4);
      testQueue.enqueue(5);
      // console.log('test queue storage after enquque', testQueue.storage)
      expect(testQueue.storage).toEqual([1, 2, 3, { "next": null, "value": 4 }, { "next": null, "value": 5 }])
    })
  })


  describe('dequeue', () => {

    describe('dequeue when the queue is populated', () => {
      const testQueue = new Queue();
      testQueue.storage = [{ "next": null, "value": 4 }, { "next": null, "value": 5 }];

      it('returns the dequeued value', () => {
        expect(testQueue.dequeue()).toEqual(4);
      })

      it('removes the value at the front of the queue and shifts the other values down an index', () => {
        expect(testQueue.storage[0]).toEqual({ "next": null, "value": 5 });
      })

      it('can successfully empty a queue after multiple dequeues', () => {
        const testQueue = new Queue();
        testQueue.storage = [{ "next": null, "value": 4 }, { "next": null, "value": 5 }];
        testQueue.dequeue();
        testQueue.dequeue();
        expect(testQueue.storage.length).toEqual(0);
        expect(testQueue.storage).toEqual([]);
      })
    })

    describe('dequeue when the queue is not populated', () => {
      const testQueue = new Queue();

      it('returns undefined', () => {
        expect(testQueue.dequeue()).toEqual(undefined);
      })

      it('has a length of 0', () => {
        expect(testQueue.storage.length).toEqual(0);
      })
    })
  })

  describe('peek()', () => {

    describe('peek() when the queue is populated', () => {
      const testQueue = new Queue();
      testQueue.storage = [{ "next": null, "value": 4 }, { "next": null, "value": 5 }];

      it('returns the first node value in the queue', () => {
        expect(testQueue.peek()).toEqual(testQueue.storage[0].value);
      })

      it('does not alter the length of the queue', () => {
        expect(testQueue.storage.length).toEqual(2);
      })
    })

    describe('peek() when the queue is empty', () => {
      const testQueue = new Queue();
      it('should return undefined', () => {
        expect(testQueue.peek()).toBeUndefined();
      })
    })
  })

  describe('isEmpty()', () => {

    describe('isEmpty() when the queue is populated', () => {
      const testQueue = new Queue();
      testQueue.storage = [{ "next": null, "value": 4 }, { "next": null, "value": 5 }];
      it('returns true', () => {
        expect(testQueue.isEmpty()).toBeTruthy();
      })
    })

    describe('isEmpty() when the queue is empty', () => {
      const testQueue = new Queue();
      it('returns false', () => {
        expect(testQueue.isEmpty()).toBeFalsy();
      })
    })
  })
})