"use strict";

let allTodo = [];
let completedTodo = [];
let activeTodo = [];

const bgBody = document.querySelector("body");
const bgImg = document.querySelector(".bgImg");
const themeIcon = document.querySelector(".themeSwitch");
const todoMain = document.querySelector(".todoMain");
const todoStatus = document.querySelector(".todoStatusBar");
const todoInput = document.querySelector(".inputTask");
const todo = document.querySelectorAll(".todo");

const activeTaskCounter = document.getElementById("numStatus");

console.log(bgBody);

//CODE
//CHANGING THE THEME
themeIcon.addEventListener("click", (e) => {
  const text = e.target.src;
  //console.log(text.includes("moon"));

  if (text.includes("moon")) {
    themeIcon.src = "images/icon-sun.svg";
    bgImg.src = "images/bg-desktop-dark.jpg";
    bgBody.classList.remove("lightThemeBody");
    bgBody.classList.add("darkTheme");
    todoMain.classList.toggle("darkThemeTodo");
    todoStatus.classList.toggle("darkThemeTodo");
    todoInput.classList.toggle("darkThemeTodo");
  } else if (text.includes("sun")) {
    themeIcon.src = "images/icon-moon.svg";
    bgImg.src = "images/bg-desktop-light.jpg";
    bgBody.classList.remove("darkTheme");
    bgBody.classList.add("lightThemeBody");
    todoMain.classList.toggle("darkThemeTodo");
    todoStatus.classList.toggle("darkThemeTodo");
    todoInput.classList.toggle("darkThemeTodo");
  }
});

//ADDING AND DISPLAYING INPUTTED TASKS
todoInput.addEventListener("keydown", (e) => {
  //only fire if the enter key is pressed
  if (e.key == "Enter") {
    const message = todoInput.value;
    activeTodo.push(message);
    console.log(message, activeTodo);
    todoInput.value = "";

    const todoHtml = `
        <div class="todo">
          <input type="checkbox" id="1" />
          <label for="1">
            ${message}
          </label>
        </div> `;

    todoMain.insertAdjacentHTML("afterbegin", todoHtml);
    activeTaskCounter.textContent = ` ${activeTodo.length} items left`;

    if (todoInput.value !== "") {
      todoInput.value = "";
    }

    console.log(activeTodo);
    //active task counter
  }
});
