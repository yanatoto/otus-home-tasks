/* eslint-disable no-console */
/* eslint-disable no-plusplus */
// Вывести в консоль таблицу умножения на 7
export function tableMult() {
  for (let i = 1; i <= 9; i++) {
    const num = 7;
    console.log(`${num} x ${i} = ${num * i}`);
  }
}
tableMult();
