import { sum, mult } from "./task1.1";

describe("sum", () => {
  it("returns sum of params", () => {
    expect(sum(2, 3)).toBe(5);
  });
});

describe("mult", () => {
  it("returns multiplication of params", () => {
    expect(mult(2, 3)).toBe(6);
  });
});
