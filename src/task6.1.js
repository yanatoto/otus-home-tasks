// Напишите функцию diff, которая получает в качестве
// параметров 2 числа и возвращает разницу между
// наибольшим и наименьшим.
export function diff(a, b) {
  let res;
  if (a > b) {
    res = a - b;
  } else {
    res = b - a;
  }
  return res;
}
