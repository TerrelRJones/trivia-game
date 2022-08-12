import { shuffleArray } from 'helper/shuffleArray';

describe('shuffleArray function', () => {
  it('should return array in random arragment.', () => {
    const arr1 = ['Hi', 'I', 'am', 'Terrel'];
    const shuffledArr = shuffleArray(arr1);

    expect(shuffledArr).not.toBe(['Hi', 'I', 'am', 'Terrel']);
  });
});
