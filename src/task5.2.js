const array = [1, 15, 18, 22, 27, 31, 38, 45, 51, 59];

const newArray = [];

for (let i = 0; i < array.length; i++) {
  const newEl = array[i] * 2;
  newArray.push(newEl);
}

console.log(newArray);
