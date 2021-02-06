// Найдите и выведите в консоль наибольший и
// наименьший элементы исходного массива.
export function getMinMax() {
  const numbers = [45, 15, 18, 59, 22, 27, 1, 31, 38, 51];
  numbers.sort((a, b) => a - b);

  console.log(numbers[0], numbers[9]);
}
