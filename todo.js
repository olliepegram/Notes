const todos = [
  {
    text: "Code",
    completed: false
  },
  {
    text: "Eat",
    completed: true
  },
  {
    text: "Go to sleep",
    completed: true
  },
  {
    text: "Walk the dog ;)",
    completed: false
  },
  {
    text: "Lift heavy",
    completed: true
  }
];

const sortTodos = function(todos) {
  todos.sort(function(a, b) {
    if (a.completed < b.completed) {
      return -1;
    } else if (b.completed < a.completed) {
      return 1;
    } else {
      return 0;
    }
  });
};
sortTodos(todos);
console.log(todos);

const deleteTodo = function(todos, todoText) {
  const index = todos.findIndex(function(todo) {
    return todo.text.toLowerCase() === todoText.toLowerCase();
  });
  if (index > -1) {
    todos.splice(index, 1);
  }
};

const getThingsToDo = function(todos, query) {
  return todos.filter(function(todo) {
    return todo.completed;
  });
};

// console.log(getThingsToDo(todos, 'eat'));

// deleteTodo(todos, 'code');
// console.log(todos);
