import { isWord } from "./task6.2";

describe("isWord", () => {
  it("returns true if string contains one word", () => {
    const str = "внимание";

    expect(isWord(str)).toBe("true");
  });
  it("returns false if string contains more tnan one word", () => {
    const str = "Обратите внимание на дорогу";

    expect(isWord(str)).toBe("false");
  });
});
