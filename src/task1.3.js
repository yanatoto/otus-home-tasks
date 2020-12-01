/* eslint-disable no-alert */
/* eslint-disable no-console */

// Написать программу, которая запрашивает у
// пользователя ввод трёхзначного числа, а потом
// выводит в консоль сумму цифр введённого числа
let num = +prompt("Enter three-digit number: ");

export function getSumOfNumbers() {
  let sum = 0;
  let tmp;
  while (num) {
    tmp = num % 10;
    num = (num - tmp) / 10;
    sum += tmp;
  }
  return sum;
}

console.log(getSumOfNumbers(num));
