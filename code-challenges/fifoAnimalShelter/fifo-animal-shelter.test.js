const AnimalShelter = require('./fifo-animal-shelter');

describe('AnimalShelter', () => {
  let animalShelter;
  beforeEach(() => {
    animalShelter = new AnimalShelter();
  })
  describe('enqueue', () => {
    it('increases the length of the storage', () => {
      expect(animalShelter.enqueue('dog')).toEqual(animalShelter.storage.length);
    })

    // revisit this test
    it('throws an error when given an invalid input', () => {
      expect(animalShelter.enqueue('rabbit')).toEqual('Not a valid input');
    })

    it('adds the value to this.storage', () => {
      animalShelter.enqueue('dog');
      expect(animalShelter.storage).toEqual(['dog'])
    })
  })

  describe('dequeue', () => {
    beforeEach(() => {
      animalShelter.enqueue('cat');
      animalShelter.enqueue('dog');
      animalShelter.enqueue('cat');

    })
    it('returns null if the pref is not found in storage', () => {
      expect(animalShelter.dequeue('rabbit')).toEqual(null);
    })
    // it('removes the last instance of the given pref', () => {
    //   animalShelter.dequeue('dog');
    //   expect(animalShelter.storage).toEqual(['cat', 'cat'])
    // })
    // it('can dequeue multiple items in a row', () => {
    //   animalShelter.dequeue('dog');
    //   animalShelter.dequeue('cat');
    //   animalShelter.dequeue('cat');
    //   expect(this.storage).toEqual([]);
    // })
  })
})