import { shuffleArray } from 'helper/shuffleArray';

describe('shuffleArray function', () => {
  it('should return array in random arragment.', () => {
    const randomSpy = jest.spyOn(Math, 'random');
    randomSpy
      .mockReturnValueOnce(0.25)
      .mockReturnValueOnce(0.75)
      .mockReturnValueOnce(0.1)
      .mockReturnValueOnce(0.9);

    const arr1 = ['Hi', 'I', 'am', 'Terrel'];
    const shuffledArr = shuffleArray(arr1);

    expect(shuffledArr).toEqual(['Terrel', 'Hi', 'am', 'I']);
    expect(randomSpy).toHaveBeenCalledTimes(arr1.length);

    randomSpy.mockRestore();
  });
});
