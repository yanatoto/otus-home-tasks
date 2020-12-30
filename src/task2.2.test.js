/* eslint-disable no-console */
import { getMonth } from "./task2.2";

describe("getMonth", () => {
  it("returns month name", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "3");
    jest.spyOn(console, "log");
    getMonth();
    expect(console.log).toHaveBeenCalledWith("March");
  });
});
