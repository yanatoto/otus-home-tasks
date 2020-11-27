const num = +prompt("Enter a number frim 1 to 12: ");
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
