/* eslint-disable no-console */
import { sum, mult } from "./task1.1";

describe("sum", () => {
  it("returns sum of params", () => {
    expect(sum(2, 3)).toBe(console.log(5));
  });
});

describe("mult", () => {
  it("returns multiplication of params", () => {
    expect(mult(2, 3)).toBe(console.log(6));
  });
});
