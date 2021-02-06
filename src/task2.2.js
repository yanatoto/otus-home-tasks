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

  if (num <= 12) {
    console.log(months[num - 1]);
  } else {
    console.log("Number must be between 1 and 12");
  }
}
