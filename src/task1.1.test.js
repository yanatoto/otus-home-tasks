/* eslint-disable no-console */
import { sum, mult } from "./task1.1";

describe("sum", () => {
  it("returns sum of params", () => {
    expect(sum(1, 2)).toBe(console.log(3));
  });
});

describe("mult", () => {
  it("returns mult of params", () => {
    expect(mult(1, 2)).toBe(console.log(2));
  });
});
