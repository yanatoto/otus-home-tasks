/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable no-plusplus */
// Запросить у пользователя ввод числа от 1 до 12.
// Вывести в консоль название месяца, соответствующее
// этому числу (1 — январь, 2 — февраль и т.д.)
export function getMonth() {
  const num = Number(prompt("Enter a number from 1 to 12: "));
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "Dezember",
  ];

  for (let i = 0; i <= months.length; i++) {
    if (months[i] === months[num - 1]) {
      console.log(months[i]);
    }
  }
}
console.log(getMonth());
