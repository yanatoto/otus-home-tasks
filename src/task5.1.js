/* eslint-disable no-console */
/* eslint-disable no-plusplus */
// Создайте массив целых чисел из 10 элементов.
// Выведите в консоль сумму всех элементов массива.
export function getArraySum() {
  const array = [1, 15, 18, 22, 27, 31, 38, 45, 51, 59];
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
