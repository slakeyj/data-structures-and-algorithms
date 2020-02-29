class AnimalShelter {
  constructor() {
    this.storage = [];
  }

  enqueue(animal) {
    if (animal === 'cat' || animal === 'dog') {
      console.log('this.storage', this.storage)
      return this.storage.unshift(animal);

    } else {
      return 'Not a valid input';
    }
  }


  dequeue(pref) {
    if (pref !== 'cat' || pref !== 'dog') {
      return null;
    }
    const reverseStorage = this.storage.reverse();
    const findPrefIndex = reverseStorage.findIndex(input => input === pref);
    reverseStorage.splice(findPrefIndex, findPrefIndex + 1)
    this.storage = reverseStorage.reverse();
    console.log('storage', this.storage)
  }

}

module.exports = AnimalShelter;