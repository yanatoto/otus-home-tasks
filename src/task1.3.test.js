import { sumOfPromptDigits } from "./task1.3";

describe("consoleSumOfPromptDigits", () => {
  it("logs to console sum of prompt digits", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "123");
    expect(sumOfPromptDigits()).toBe(6);
  });
});
