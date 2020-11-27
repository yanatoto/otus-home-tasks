const arr = [];

const num = +prompt('Enter a three digit number: ');

for (let i = 1; i <= num; i++) {
  let newEl;
  if (i % 2 !== 0) {
    newEl = i;

    arr.push(newEl);
  }
}

const sum = arr.reduce((a, b) => a + b, 0);
let res;
res = sum / arr.length;
// console.log(arr);
// console.log(arr.length);
// console.log(sum);

console.log(res);
