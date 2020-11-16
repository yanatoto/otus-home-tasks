"use strict";

let getOverage = function () {
  let arr = [];
  let sum = 0;
  let res = sum / arr.length;

  let num = +prompt("Enter a three digit number: ");
  for (let i = 1; i <= num; i++) {
    let newEl;
    if (i % 2 !== 0) {
      newEl = i;
      arr.push(newEl);
    }

    for (let j = 0; j <= arr.length; j++) {
      sum += arr[j];
      console.log(sum);
    }
  }

  

  return res;
};

console.log(getOverage());
