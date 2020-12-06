/* eslint-disable no-console */

import { consoleSumOfPromptDigits } from "./task1.3";

describe("consoleSumOfPromptDigits", () => {
  it("logs to console sum of prompt digits", () => {
    jest.spyOn(window, "prompt").mockReturnValue(6);
    jest.spyOn(console, "log");

    expect(consoleSumOfPromptDigits()).toBe(6);
  });
});
