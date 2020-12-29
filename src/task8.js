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

  return minsPass;
}

// 3.*В двух переменных хранятся даты рождения двух
// пользователей в формате ДД.ММ.ГГГГ. Написать
// программу, которая определяет более молодого
// пользователя.

export function getYoungerUser(user1, user2) {
  const date1 = new Date(user1);
  const date2 = new Date(user2);

  if (date1.getTime() > date2.getTime()) {
    return date1;
  }
  return date2;
}
