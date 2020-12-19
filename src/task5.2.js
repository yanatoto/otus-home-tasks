// Создайте новый массив на основе исходного, в
// котором каждый элемент будет вдвое больше
// элемента исходного массива с таким же индексом.
// (a[1] = 3, b[1] = 6, где a — исходный массив, b — новый
// массив)

export function doubleArrayElements() {
  const array = [1, 15, 18, 22, 27, 31, 38, 45, 51, 59];

  const newArray = [];

  for (let i = 0; i < array.length; i += 1) {
    const newEl = array[i] * 2;
    newArray.push(newEl);
  }
  return newArray;
}
