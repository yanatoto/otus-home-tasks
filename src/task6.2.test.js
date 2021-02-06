import { isWord } from "./task6.2";

describe("isWord", () => {
  it("returns true if string contains one word", () => {
    expect(isWord("внимание")).toBeTruthy();
  });
  it("returns false if string contains more tnan one word", () => {
    expect(isWord("Обратите внимание на дорогу")).toBeFalsy();
  });
});
