import { diff } from "./task6.1";

describe("diff", () => {
  it("returns diff between numbers number", () => {
    const a = 10;
    const b = 5;
    expect(diff(a, b)).toEqual(5);
  });
});
