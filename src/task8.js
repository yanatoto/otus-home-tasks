/* eslint-disable no-console */
/* eslint-disable no-alert */
// 1.Запросите у пользователя дату в формате
// ДД.ММ.ГГГГ. Напишите программу, выводящую день
// недели по введённой дате.

export function getWeekDay() {
  const input = prompt("DD.MM.YYYY");
  const [day, month, year] = input.split(".");
  const date = new Date(`${year}-${month}-${day}`);
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return days[date.getDay() - 1];
}

// console.log(getWeekDay());
