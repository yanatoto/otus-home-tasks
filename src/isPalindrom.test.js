/* eslint-disable no-console */
import { isPalindrom } from "./isPalindrom";

describe("isPalindrom", () => {
  it("returns true for palidron and false if not", () => {
    expect(isPalindrom("a")).toBe(true);
    expect(isPalindrom("gg")).toBe(true);
    expect(isPalindrom("pop")).toBe(true);
    expect(isPalindrom("1212")).toBe(false);
  });
});
