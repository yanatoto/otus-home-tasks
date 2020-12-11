/* eslint-disable no-console */
import { getUser } from "./task4.1";

describe("getUser", () => {
  it("returns object user with user age", () => {
    const value = 25;
    jest.spyOn(window, "prompt").mockImplementation(() => value);

    const user = getUser();
    expect(user).toEqual({ name: "John", age: 25 });
  });
});
