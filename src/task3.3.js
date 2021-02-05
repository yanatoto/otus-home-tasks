// Запросить у пользователя ввод числа N. Вывести в
// консоль среднее арифметическое всех нечётных
// чисел от 1 до N.
export function getArithOverage() {
  const arr = [];

  const num = +prompt("Enter a number: ");

  for (let i = 1; i <= num; i++) {
    let newEl;
    if (i % 2 !== 0) {
      newEl = i;

      arr.push(newEl);
    }
  }

  const sum = arr.reduce((a, b) => a + b, 0);

  const res = sum / arr.length;
  return res;
}

console.log(getArithOverage());
