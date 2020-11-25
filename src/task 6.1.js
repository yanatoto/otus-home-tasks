"use strict";
let diff = function (a, b) {
    if (a > b) {
      return a - b;
    } else {
      return b - a;
    }
  };
  console.log(diff(10, 20));
  