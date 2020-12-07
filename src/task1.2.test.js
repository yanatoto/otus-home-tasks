/* eslint-disable no-console */
import { getStrLength } from "./task1.2";

describe("getStrLength", () => {
  it("returns sum of lengths", () => {
    expect(getStrLength("yana", "salvatore")).toBe(13);
  });
});
