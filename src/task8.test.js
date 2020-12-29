/* eslint-disable no-console */
import { getWeekDay, getMinsPassed, getYoungerUser } from "./task8";

describe("getWeekDay, getMinsPassed, getYoungerUser", () => {
  test("Returns the day of the week", () => {
    jest.spyOn(global.window, "prompt").mockImplementation(() => "01.12.2020");
    expect(getWeekDay()).toEqual("Tuesday");
  });

  test("Returns passed minutes", () => {
    const now = new Date();
    const res = now.getHours() * 60 + now.getMinutes();
    expect(getMinsPassed()).toBe(res);
  });

  test("Returns younger user", () => {
    const user1 = new Date(1, 10, 1995);
    const user2 = new Date(1, 5, 1982);
    expect(getYoungerUser(user1, user2)).toEqual(user1);
  });
});
