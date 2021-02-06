// Напишите функцию isWord, которая принимает на
// вход текстовую строку. Функция возвращает true, если
// строка состоит из одного слова и false, если из
// нескольких
export function isWord(string) {
  const words = string.split(/,|\s+|,\s+/);
  return words.length === 1;
}
