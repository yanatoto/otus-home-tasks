"use strict";
let isWord = function (string) {
    let res;
    let substring = " ";
    let param = string.indexOf(substring) !== -1;
    
    if (param) {
      res = "false";
    } else {
      res = "true";
    }
    return console.log(res);
  };
  isWord("Обратите внимание на дорогу");
  