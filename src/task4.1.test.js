/* eslint-disable no-console */
import { getUserAge } from "./task4.1";

describe("getUserAge", () => {
  it("returns object user with age", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "25");
    getUserAge();
    const user = {
      name: "John",
      age: "25",
    };

    expect(user.age).toEqual("25");
  });
});
