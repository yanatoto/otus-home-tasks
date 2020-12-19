/* eslint-disable no-console */
/* eslint-disable func-names */

const input = document.querySelector("input");
input.value = "";

document.querySelector("button").addEventListener("click", function () {
  const paragraph = document.querySelector("#paragraph");
  const elements = paragraph.querySelectorAll("p");
  console.log(elements);
  if (elements.length > 5) {
    const elem = document.querySelector("#el1");

    // console.log(elem);
    // console.log(elements);
    paragraph.removeChild(elem);
  }
  const newElement = document.createElement("p");
  paragraph.append(newElement);
  console.log(elements.length);
  newElement.textContent = input.value;
  input.value = "";
});

// const quantity = document.elements.length;
