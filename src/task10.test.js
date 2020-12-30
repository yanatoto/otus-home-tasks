/* eslint-disable no-console */
import { isItDate, isItEmail, isItPhoneNumber } from "./task10";

describe("isItDate, isItEmail, isItPhoneNumber,", () => {
  test("Returns true for the correct date", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "30.12.2020");
    expect(isItDate()).toBeTruthy();
  });

  test("Returns true for the correct email", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "yana@gmail.com");

    expect(isItEmail()).toBeTruthy();
  });

  test("Returns true for the correct phone number", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "+41752454230");

    expect(isItPhoneNumber()).toBeTruthy();
  });
});
