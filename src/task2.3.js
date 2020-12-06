/* eslint-disable no-console */
// В переменных circle и square хранятся площади круга
// и квадрата соответственно. Написать программу,
// которая определяет, поместится ли круг в квадрат.
export function ifCompatible(circle, square) {
  const circleDiameter = 2 * Math.sqrt(circle / Math.PI);

  const squareParam = Math.sqrt(square);

  if (circleDiameter <= squareParam) {
    console.log("yes");
  } else {
    console.log("no");
  }
}

ifCompatible(45, 60);
