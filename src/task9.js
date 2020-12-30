/* eslint-disable no-console */
// 1.Даны длины трёх сторон треугольника. Определить,
// является ли треугольник прямоугольным.

export function rightTriangle(a, b, c) {
  if (c ** 2 === a ** 2 + b ** 2) {
    return true;
  }
  return false;
}

// console.log(rightTriangle(3, 4, 5));
