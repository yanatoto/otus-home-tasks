/* eslint-disable no-console */
import { doubleArrayElements } from "./task5.2";

describe("doubleArrayElements", () => {
  it("returns array elements with double value", () => {
    const arr = [2, 30, 36, 44, 54, 62, 76, 90, 102, 118];

    expect(doubleArrayElements()).toEqual(arr);
  });
});
