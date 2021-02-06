import { getArraySum } from "./task5.1";

describe("getArraySum", () => {
  it("returns sum of array elements", () => {
    jest.spyOn(console, "log");
    getArraySum();
    expect(console.log).toBeCalledWith(307);
  });
});
