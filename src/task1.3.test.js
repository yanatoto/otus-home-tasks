/* eslint-disable no-console */

import { consoleSumOfPromptDigits } from "./task1.3";

describe("consoleSumOfPromptDigits", () => {
  it("logs to console sum of prompt digits", () => {
    const digits = [1, 2, 3];
    jest.spyOn(window, "prompt").mockImplementation(() => digits.shift());
    jest.spyOn(console, "log");
    consoleSumOfPromptDigits();
    expect(console.log).toHaveBeenCalledWith(6);
  });
});
