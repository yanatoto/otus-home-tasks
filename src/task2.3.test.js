/* eslint-disable no-console */
import { ifCompatible } from "./task2.3";

describe("ifCompatible", () => {
  it("returns yes if compatible", () => {
    jest.spyOn(console, "log");
    ifCompatible(45, 60);
    expect(console.log).toHaveBeenCalledWith("yes");
  });
});
