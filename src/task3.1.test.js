import { getNumbers } from "./task3.1";

describe("getNumbers", () => {
  it("console numbers from 50 till 100", () => {
    jest.spyOn(console, "log");
    getNumbers();
    expect(console.log).toBeCalledWith(3825);
  });
});
