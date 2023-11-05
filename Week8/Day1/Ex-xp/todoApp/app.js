import { TodoList } from "./todo.js";

let myList = new TodoList()

myList.addTask('Clean the room')
myList.addTask('Go for a walk')
myList.addTask('Do a Homework')

myList.AllTasks()

myList.markTask('Clean the room')