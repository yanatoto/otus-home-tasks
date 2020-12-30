import {
  rightTriangle,
  getPerimeterOfCircle,
  getSquareOfCircle,
} from "./task9";

describe("rightTriangle, getPerimeterOfCircle, getSquareOfCircle", () => {
  test("Returns true for right triangle", () => {
    expect(rightTriangle(3, 4, 5)).toBeTruthy();
  });

  test("Returns perimeter of circle", () => {
    jest.spyOn(global.window, "prompt").mockImplementation(() => "5");
    const res = Math.floor(31.41592653589793);
    expect(getPerimeterOfCircle(5)).toEqual(res);
  });

  test("Returns square of circle", () => {
    jest.spyOn(global.window, "prompt").mockImplementation(() => "7");
    const res = Math.floor(153.93804002589985);
    expect(getSquareOfCircle(7)).toEqual(res);
  });
});
