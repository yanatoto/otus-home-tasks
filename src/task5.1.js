// Создайте массив целых чисел из 10 элементов.
// Выведите в консоль сумму всех элементов массива.
export function getArraySum() {
  const arr = [1, 15, 18, 22, 27, 31, 38, 45, 51, 59];
  const result = arr.reduce((sum, current) => sum + current, 0);
  console.log(result);
}
