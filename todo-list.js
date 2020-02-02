let todos = ["Buy New Turtle", "Learn to Code"];

let input = prompt("What would you like to do?");

while (input !== "quit") {
  if (input === "list") {
    console.log(todos);
  } else if (input === "new") {
    let newTodo = prompt("What is your new task?");
    todos.push(newTodo);
  } else if (input === "2") {
    let thirdTodo = prompt("Enter new todo to the front");
    todos.unshift(thirdTodo);
  } else if (input === "3") {
    let fourthTodo = prompt("Enter new todo");
    todos.push(fourthTodo);
  } else if (input === "4") {
    let fifthTodo = prompt("Enter new todo");
    todos.push(fifthTodo);
  }

  input = prompt("What would you like to do?");
}

// todos.push("Do my Nails");

console.log(todos, "okay you quit the app");

//todos.pop();

//console.log(todos);
