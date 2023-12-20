// import statements

// variable declarations

// function declaraations

function simpleFunction(a, b) {
  // some functinality
  return a + b;
}

function Person(name, lastName, age, gender) {
  this.name = name;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

Person.prototype.getAge = function () {
  return this.age;
};

Person.prototype.getYearBorn = function () {
  const currentYear = new Date().getFullYear();
  return currentYear - this.age;
};

export default Person;

/**
 * document.body;
 * document.getElementById();
 */

// const todo_1 = new simpleFunction();

// let inputTask = document.getElementById("newTask");
// let taskList = document.getElementById("taskList");
// let createBtn = document.getElementById("addTaskBtn");

// function onClickCreateTask() {
//   if (inputTask.value != "") {
//     let listElement = document.createElement("li");
//     let spanElement = document.createElement("span");
//     spanElement.textContent = inputTask.value;

//     let completeBtn = document.createElement("button");
//     completeBtn.innerHTML = "Completed";
//     completeBtn.addEventListener("click", onClickComplete);

//     let deleteBtn = document.createElement("button");
//     deleteBtn.innerHTML = "Delete";
//     deleteBtn.addEventListener("click", onClickDelete);

//     listElement.appendChild(spanElement);
//     listElement.appendChild(completeBtn);
//     listElement.appendChild(deleteBtn);
//     taskList.appendChild(listElement);
//   }

//   inputTask.value = "";
// }

// function onClickComplete(event) {
//   let listElement = event.target.parentElement;

//   // toggle method is a shortcut for the following code:
//   //   if(listElement.classList.containes("completed")) {
//   //      listElement.classList.remove("completed");
//   //   } else {
//   //     listElement.classList.add("completed");
//   //   }
//   listElement.classList.toggle("completed");
// }

// function onClickDelete(event) {
//   let element = event.target.closest("li");
//   element.remove(element);
// }

// function init() {
//   createBtn.addEventListener("click", onClickCreateTask);
// }

// export { init };
