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

// 2.Написать программу, которая выводит в консоль
// количество минут, прошедшее с начала сегодняшнего
// дня.
export function getMinsPassed() {
  const now = new Date();

  const hrs = now.getHours();
  const mins = now.getMinutes();
  const minsPass = hrs * 60 + mins;

  return console.log(minsPass);
}
