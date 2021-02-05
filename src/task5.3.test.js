import { getMinEl, getMaxEl } from "./task5.3";

describe("getMinEl, getMaxEl", () => {
  it("returns min element of array", () => {
    expect(getMinEl()).toEqual(1);
  });
  it("returns max element of array", () => {
    expect(getMaxEl()).toEqual(59);
  });
});
