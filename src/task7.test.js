/* eslint-disable no-console */
import { addForm } from "./task7";

describe("addForm", () => {
  let el;
  let button;
  let input;

  beforeEach(() => {
    el = document.createElement("div");
  });

  test("Create HTML page", () => {
    addForm(el);

    button = el.querySelector(".button");
    input = el.querySelector(".input");

    expect(button).toBeTruthy();
    expect(input).toBeTruthy();
  });

  test("Show button", () => {
    addForm(el);
    button = el.querySelector(".button");
    input = el.querySelector(".input");
    input.value = "123";
    input.dispatchEvent(new global.window.Event("input"));

    expect(button.hidden).toBeFalsy();
    input.value = "";
    input.dispatchEvent(new global.window.Event("input"));
    expect(button.hidden).toBeTruthy();
  });

  it("5 x p", () => {
    addForm(el);
    button = el.querySelector(".button");
    input = el.querySelector(".input");
    let text;
    for (let i = 0; i < 7; i += 1) {
      text = `${Math.random()}`;
      input.value = text;
      input.dispatchEvent(new window.Event("input"));
      button.dispatchEvent(new window.Event("click"));
    }

    expect(input.value).toBe("");
    expect(button.hidden).toBe(true);
    expect(el.querySelectorAll("p").length).toBe(10);
    expect(el.childNodes[11].innerText).toBe(text);
  });
});
