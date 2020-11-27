const array = [1, 15, 18, 22, 27, 31, 38, 45, 51, 59];

const currentIndex = 0;
let min = array[currentIndex];

for (let i = currentIndex + 1; i <= array.length - 1; i++) {
  if (array[i] < min) {
    min = array[i];
  }
}

let max = array[currentIndex];

for (let i = currentIndex + 1; i <= array.length - 1; i++) {
  if (array[i] > max) {
    max = array[i];
  }
}
console.log(min);
console.log(max);
