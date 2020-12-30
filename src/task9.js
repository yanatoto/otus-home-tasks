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
  const perimeter = Math.floor(2 * Math.PI * radius);

  return perimeter;
}

export function getSquareOfCircle() {
  const radius = prompt("Enter a radius: ");
  const square = Math.floor(Math.PI * radius ** 2);

  return square;
}

// Пользователь вводит числа a, b и c. Написать
// программу, выводящую корни квадратного
// уравнения с коэффициентами a, b и c.

export function getSquareRoot(a, b, c) {
  // quadraticEquation ax2 + bx + c = 0
  const D = b ** 2 - 4 * a * c;

  let res;

  if (D < 0) {
    res = console.log("This equation has not solution");
  } else if (D === 0) {
    res = -b / (2 * a);
  }
  const x1 = (-b + Math.sqrt(D)) / (2 * a);
  const x2 = (-b - Math.sqrt(D)) / (2 * a);

  res = console.log(x1, x2);

  return res;
}
