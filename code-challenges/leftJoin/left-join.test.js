const leftJoin = require('./left-join');


describe('leftJoin', () => {
  let mapOne;
  let mapTwo;

  beforeEach(() => {
    mapOne = new Map();
    mapTwo = new Map();
  })

  it('returns an empty array if both hash maps are empty', () => {
    expect(leftJoin(mapOne, mapTwo)).toEqual([])
  })

  it('returns the left join values of one data point', () => {
    mapOne.set('life', 'vigor');
    mapTwo.set('life', 'death');
    expect(leftJoin(mapOne, mapTwo)).toEqual([['life', 'vigor', 'death']])
  })

  it('left joins with multiple data points', () => {
    mapOne.set('life', 'vigor');
    mapOne.set('sound', 'tone');
    mapTwo.set('life', 'death');
    mapTwo.set('sound', 'silence');
    expect(leftJoin(mapOne, mapTwo)).toEqual([['life', 'vigor', 'death'], ['sound', 'tone', 'silence']])
  })

  it('replaces a non-matching value with null', () => {
    mapOne.set('life', 'vigor');
    mapOne.set('sound', 'tone');
    mapOne.set('hot', 'heated')
    mapTwo.set('life', 'death');
    mapTwo.set('sound', 'silence');
    expect(leftJoin(mapOne, mapTwo)).toEqual([['life', 'vigor', 'death'], ['sound', 'tone', 'silence'], ['hot', 'heated', null]])
  })

})