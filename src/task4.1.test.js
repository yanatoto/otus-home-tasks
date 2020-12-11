/* eslint-disable no-console */
import { getUserAge } from "./task4.1";

describe("getUserAge", () => {
  it("returns object user with user age", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "25");

    expect(getUserAge()).toEqual({ name: "John", age: 25 });
  });
});
