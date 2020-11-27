/* eslint-disable no-undef */
import { sum, mult } from './task 1.1';

// eslint-disable-next-line no-undef
describe('sum', () => {
  it('returns sum of params', () => {
    // eslint-disable-next-line no-undef
    expect(sum(1, 2)).toBe(3);
  });
});

describe('mult', () => {
  it('returns mult of params', () => {
    expect(mult(1, 2)).toBe(2);
  });
});
