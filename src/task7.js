/* eslint-disable no-plusplus */
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
export function addForm(el) {
  const input = document.createElement("input");
  const button = document.createElement("button");

  for (let i = 1; i <= 3; i++) {
    const p = document.createElement("p");
    el.appendChild(p);
    p.innerText = "Text";
  }

  input.classList.add("input");
  button.classList.add("button");
  button.innerText = "Click";

  button.hidden = true;
  el.appendChild(input);
  el.appendChild(button);

  input.addEventListener("input", function () {
    button.hidden = !this.value.length;
  });

  button.addEventListener("click", function () {
    const pp = document.createElement("p");
    pp.innerText = input.value;

    el.append(pp);
    input.value = "";
    button.hidden = true;

    if (document.querySelectorAll("p").length > 5) {
      document.querySelectorAll("p")[0].remove();
    }
  });
}
// addForm();
