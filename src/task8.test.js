/* eslint-disable no-console */
import { getWeekDay } from "./task8";

describe("getWeekDay", () => {
  test("Returns the day of the week", () => {
    jest.spyOn(global.window, "prompt").mockImplementation(() => "01.12.2020");
    expect(getWeekDay()).toEqual("Tuesday");
  });
});
