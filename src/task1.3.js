const num = +prompt('Enter three-digit number: ');

function getSumNumber(num) {
  let sum = 0;
  let tmp;
  while (num) {
    tmp = num % 10;
    num = (num - tmp) / 10;
    sum += tmp;
  }
  return sum;
}

console.log(getSumNumber(num));
