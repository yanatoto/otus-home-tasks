/* eslint-disable no-alert */
// Запросить у пользователя ввод числа. Записать
// введенное значение в поле age объекта user.

export function getUserAge() {
  const user = {
    name: "John",
  };

  const age = Number(prompt("Enter your age: "));
  user.age = age;
  return user;
}
