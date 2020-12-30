import { rightTriangle } from "./task9";

describe("rightTriangle", () => {
  test("Returns true for right triangle", () => {
    expect(rightTriangle(3, 4, 5)).toBeTruthy();
  });
});
