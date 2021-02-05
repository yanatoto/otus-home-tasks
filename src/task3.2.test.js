import { tableMult } from "./task3.2";

describe("tableMult", () => {
  it("console multiplication table of 7", () => {
    jest.spyOn(console, "log");
    expect(tableMult()).toBe(console.log("7 x 1 = 7" - "7 x 9 = 63"));
  });
});
