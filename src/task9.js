/* eslint-disable no-alert */
/* eslint-disable no-console */
// 1.Даны длины трёх сторон треугольника. Определить,
// является ли треугольник прямоугольным.

export function rightTriangle(a, b, c) {
  if (c ** 2 === a ** 2 + b ** 2) {
    return true;
  }
  return false;
}

// 2.Пользователь вводит число R. Написать программу,
// которая выведет в консоль длину окружности и
// площадь круга с радиусом R.

export function getPerimeterOfCircle() {
  const radius = prompt("Enter a radius: ");
  const perimeter = 2 * Math.PI * radius;

  return perimeter;
}
console.log(getPerimeterOfCircle());

export function getSquareOfCircle() {
  const radius = prompt("Enter a radius: ");
  const square = Math.PI * radius ** 2;

  return square;
}
