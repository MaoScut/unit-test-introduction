import { DeduplicateArray } from './deduplicate-array';

describe('DeduplicateArray', () => {

  it('["madp", "madp2", "dengjy", "liuwj"] should return true', () => {
    expect(DeduplicateArray(['madp', 'madp2', 'dengjy', 'liuwj'])).toBeTruthy();
  });
  it('["madp", "dengjy", "liuwj", "madp"] should return true', () => {
    expect(DeduplicateArray(['madp', 'dengjy', 'liuwj', 'madp'])).toBeFalsy();
  });
});
