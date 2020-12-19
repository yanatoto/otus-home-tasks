import { pow } from "./task6.3";

describe("pow", () => {
  it("returns a**b", () => {
    expect(pow(2, 4)).toBe(16);
  });
});
