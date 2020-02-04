let todos = ["Buy New Turtle", "Learn to Code"];

let input = prompt("What would you like to do?");

while (input !== "quit") {
  if (input === "list") {
    listTodos();
  } else if (input === "new") {
    newTodo();
  } else if (input === "delete") {
    deleteTodo();
  }
  //   else if (input === "2") {
  //     let thirdTodo = prompt("Enter new todo to the front");
  //     todos.unshift(thirdTodo);
  //   }

  input = prompt("What would you like to do?");
}

// todos.push("Do my Nails");

console.log(todos, "okay you quit the app");

function listTodos() {
  console.log("**********");
  todos.forEach(function(todos, i) {
    //console.log(i + ": " + todos);
    console.log(`${i}: ${todos}`);
  });
  console.log("**********");
  console.log(todos);
}

function newTodo() {
  let newTodo = prompt("What is your new task?");
  todos.push(newTodo);
  console.log(`added ${newTodo} as a todo`);
}

deleteTodo = () => {
  let index = prompt("What do you want to delete?");
  todos.splice(index, 1);
  console.log("deleted todo");
};

//todos.pop();

//console.log(todos);

//**SEPERATE DATE */

//Retrieving Data from Arrays

let friends = ["Charlie", "Josh", "Emma", "Oliver"];
//console.log(friends[2]);

friends[2] = "Emmie";
//console.log(friends[2]);

//**forEach */
// let colors = ["red", "green", "blue", "yellow"];

// colors.forEach(colors => {
//   console.log(colors);
// });

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let colors = ["red", "orange", "yellow", "blue"];

numbers.forEach(n => {
  if (n % 3 === 0) {
    //console.log(n);
  }
});
