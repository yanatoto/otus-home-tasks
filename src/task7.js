/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
/* eslint-disable func-names */
// Сверстать страницу и подключить к ней файл со
// скриптом. На странице должны быть три текстовых
// параграфа, поле ввода и кнопка. Напишите скрипт,
// который будет выполнять следующие условия:
// 1.Кнопка скрыта, если в поле ввода нет значения.
// 2.При клике на кнопку добавляется новый параграф,
// содержащий текст из поля ввода.
// 3.*Если параграфов становится больше 5, первый из
// них удаляется.
export function addForm() {
  const input = document.querySelector(".input");
  const button = document.querySelector(".button");

  // button.className = "button";
  input.className = "input";
  button.innerText = "Click";

  button.hidden = true;

  input.addEventListener("input", function () {
    button.hidden = !this.value.length;
  });

  button.addEventListener("click", function () {
    const p = document.createElement("p");
    p.textContent = input.value;

    const paragraph = document.querySelector("#paragraph");
    paragraph.append(p);
    input.value = "";
    button.hidden = true;

    const elements = paragraph.querySelectorAll("p");

    if (elements.length > 5) {
      const elem = document.querySelector("p");
      paragraph.removeChild(elem);
    }
  });
}
// addForm();
