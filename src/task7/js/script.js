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

const inputText = document.querySelector(".text-field");
inputText.removeEventListener("input", showButton);
inputText.addEventListener("input", hideButton);

function hideButton() {
  const button = document.querySelector(".button");

  button.hidden = true;

  inputText.removeEventListener("input", hideButton);
  inputText.addEventListener("input", showButton);
}

function showButton() {
  const button = document.querySelector(".button");

  button.hidden = false;

  inputText.removeEventListener("input", showButton);
  inputText.addEventListener("input", hideButton);
}

function checkInput() {
  // const button = document.querySelector(".button");
  if (inputText.value === "") {
    hideButton();
  } else {
    showButton();
  }
}
checkInput();

// const inputText = document.querySelector(".text-field");

function addNewParagraph() {
  const button = document.querySelector(".button");
  button.addEventListener("click", function () {
    const paragraph = document.querySelector("#paragraph");
    const elements = paragraph.querySelectorAll("p");
    const newElement = document.createElement("p");
    paragraph.append(newElement);
    if (elements.length >= 5) {
      const elem = document.querySelector("p");
      paragraph.removeChild(elem);
    }
    newElement.textContent = inputText.value;
    inputText.value = "";
  });
}
addNewParagraph();
