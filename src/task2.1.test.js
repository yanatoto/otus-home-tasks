import { getBiggerNum } from "./task2.1";

describe("getBiggerNum", () => {
  it("returns bigger number", () => {
    jest.spyOn(console, "log");
    getBiggerNum(5, 10);
    expect(console.log).toHaveBeenCalledWith(10);
  });
});
