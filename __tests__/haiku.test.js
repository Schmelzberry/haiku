import Haiku from './../src/haiku.js';

describe('Haiku', () => {

  test('should return a string', () => {
    const sentence = new Haiku()
    expect(sentence.string).toEqual(undefined)
    
  });
});