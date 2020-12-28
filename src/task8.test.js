/* eslint-disable no-console */
import { getWeekDay, getMinsPassed } from "./task8";

describe("getWeekDay, getMinsPassed", () => {
  test("Returns the day of the week", () => {
    jest.spyOn(global.window, "prompt").mockImplementation(() => "01.12.2020");
    expect(getWeekDay()).toEqual("Tuesday");
  });

  test("Returns passed minutes", () => {
    const now = new Date();
    const res = now.getHours() * 60 + now.getMinutes();
    expect(getMinsPassed()).toBe(res);
  });
});
