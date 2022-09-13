let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");

//Event listeners
form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

//Functions

let formValidation = () => {
  if (textInput.value === "") {
    console.log("Text input is empty");
  } else {
    console.log("success");
    msg.innerHTML = "Success";
    acceptData();
  }
};

let data = [{}];

let acceptData = () => {
  data.push({
    text: textInput.value,
    date: dateInput.value,
    description: textarea.value,
  });
};

let createTask = () => {};
let deleteTask = () => {};
let editTask = () => {};
let resetForm = () => {};

// Anonomous helper function
