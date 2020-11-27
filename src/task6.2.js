const isWord = function (string) {
  let res;
  const substring = ' ';
  const param = string.indexOf(substring) !== -1;

  if (param) {
    res = 'false';
  } else {
    res = 'true';
  }
  return console.log(res);
};
isWord('Обратите внимание на дорогу');
