import { sum, mult } from './task1.1';

describe('sum', () => {
  it('returns sum of params', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe('mult', () => {
  it('returns mult of params', () => {
    expect(mult(1, 2)).toBe(2);
  });
});
