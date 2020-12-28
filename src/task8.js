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

export function getYoungerUser() {
  const user1 = "01.10.1995";
  const [day1, month1, year1] = user1.split(".");
  const date1 = new Date(`${year1}-${month1}-${day1}`);

  const user2 = "01.05.1992";
  const [day2, month2, year2] = user2.split(".");
  const date2 = new Date(`${year2}-${month2}-${day2}`);

  const user1Age = Date.now() - date1;
  const user2Age = Date.now() - date2;

  if (user1Age < user2Age) {
    return console.log("user1 is younger");
  }
  return console.log("user2 is younger");
}
