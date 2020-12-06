/* eslint-disable no-console */
import { getMonth } from "./task2.2";

describe("getMonth", () => {
  it("returns month name", () => {
    const digits = ["3"];
    jest.spyOn(window, "prompt").mockImplementation(() => digits.shift());
    jest.spyOn(console, "log");
    getMonth();
    expect(console.log).toHaveBeenCalledWith("March");
  });
});
