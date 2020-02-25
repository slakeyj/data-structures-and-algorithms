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