/* eslint-disable no-console */
import { getNumbers } from "./task3.1";

describe("getNumbers", () => {
  it("console numbers from 50 till 100", () => {
    expect(getNumbers()).toBe(console.log(50 - 100));
  });
});
