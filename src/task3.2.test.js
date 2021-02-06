import { tableMult } from "./task3.2";

describe("tableMult", () => {
  jest.spyOn(console, "log");
  it("console multiplication table of 7", () => {
    tableMult();
    expect(console.log).toBeCalledWith("7 x 1 = 7");
    expect(console.log).toHaveBeenLastCalledWith("7 x 9 = 63");
  });
});
