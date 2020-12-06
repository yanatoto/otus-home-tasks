/* eslint-disable no-console */
import { ifCompatible } from "./task2.3";

describe("ifCompatible", () => {
  it("returns yes if compatible", () => {
    expect(ifCompatible(45, 60)).toBe(console.log("yes"));
  });
});
