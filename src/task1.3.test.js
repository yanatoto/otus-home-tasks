/* eslint-disable no-console */

import { sumOfPromptDigits } from "./task1.3";

describe("consoleSumOfPromptDigits", () => {
  it("logs to console sum of prompt digits", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "123");
    jest.spyOn(console, "log");
    sumOfPromptDigits();
    expect(console.log).toHaveBeenCalledWith("6");
  });
});
