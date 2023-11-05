// 🌟 Exercise 4: Todo List Using ES6 Module Syntax
// Instructions
// Create a directory named todoApp.

// Inside the todoApp directory, create two files: todo.js and app.js.

// In todo.js, define an ES6 module that exports a TodoList class.

// The TodoList class should have methods to add tasks, mark tasks as complete, and list all tasks.

// Export the TodoList class.

// In app.js, import the TodoList class from the todo.js module.

// Create an instance of the TodoList class.

// Add a few tasks, mark some as complete, and list all tasks.

// Run app.js and verify that the todo list operations are working correctly.


export class TodoList {
    constructor() {
      this.tasks = [];
    }

    addTask(name, complete = false) {
        let task = {
            name,
            complete,
        }
        this.tasks.push(task)
      }

    markTask(name) {
    this.tasks.forEach(task => {
        if (task.name === name){
            task.complete = true
            console.log( `${task.name} is completed`)
        }
    })
    }

    AllTasks() {
        this.tasks.forEach(task => {
            console.log(task.name)
        })
        }

  }