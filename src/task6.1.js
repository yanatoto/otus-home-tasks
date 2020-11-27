const diff = function (a, b) {
  if (a > b) {
    return a - b;
  }
  return b - a;
};
console.log(diff(10, 20));
