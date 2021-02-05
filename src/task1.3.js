// Написать программу, которая запрашивает у
// пользователя ввод трёхзначного числа, а потом
// выводит в консоль сумму цифр введённого числа

export function sumOfPromptDigits() {
  let num = Number(prompt("123"));
  let sum = 0;
  let tmp;
  while (num) {
    tmp = num % 10;
    num = (num - tmp) / 10;
    sum += tmp;
  }
  return sum;
}
