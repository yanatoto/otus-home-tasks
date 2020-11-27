import { getStrLength } from './task1.2';

describe('sum', () => {
  it('returns sum of lengths', () => {
    expect(getStrLength('yana', 'salvatore')).toBe(13);
  });
});
