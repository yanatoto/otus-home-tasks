/* eslint-disable no-console */
/* eslint-disable no-plusplus */
// Найдите и выведите в консоль наибольший и
// наименьший элементы исходного массива.

const array = [1, 15, 18, 22, 27, 31, 38, 45, 51, 59];
const currentIndex = 0;

export function getMinEl() {
  let min = array[currentIndex];

  for (let i = currentIndex + 1; i <= array.length - 1; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
}

export function getMaxEl() {
  let max = array[currentIndex];

  for (let i = currentIndex + 1; i <= array.length - 1; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}
