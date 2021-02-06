// Напишите функцию isWord, которая принимает на
// вход текстовую строку. Функция возвращает true, если
// строка состоит из одного слова и false, если из
// нескольких
export function isWord(string) {
  string.split(/,|\s+|,\s+/);
  let res;

  const substring = " ";
  const param = string.indexOf(substring) !== -1;

  if (param) {
    res = "false";
  } else {
    res = "true";
  }
  return res;
}
isWord("Обратите внимание на дорогу");
