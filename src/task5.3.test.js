import { getMinMax } from "./task5.3";

describe("getMinMax", () => {
  it("returns min element of array", () => {
    jest.spyOn(console, "log");
    getMinMax();
    expect(console.log).toBeCalledWith(1, 59);
  });
});
