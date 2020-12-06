/* eslint-disable no-console */
import { tableMult } from "./task3.2";

describe("tableMult", () => {
  it("console multiplication table of 7", () => {
    expect(tableMult()).toBe(console.log("7 x 1 = 7" - "7 x 9 = 63"));
  });
});
