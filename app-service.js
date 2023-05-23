'use strict'

function getTodos(filterBy = "") {
    const todos = JSON.parse(localStorage.getItem('todos'))
    if (!todos || todos.length === 0) {
        // localStorage.setItem('todos', JSON.stringify(demoTodos))
        return []

        //alert("You have no tasks!")
        // const demoTodos = [
        //     {
        //         id: 1,
        //         txt: 'Buy shawarma'
        //     },
        //     {
        //         id: 2,
        //         txt: 'World peace'
        //     },
        //     {
        //         id: 3,
        //         txt: 'Discover america'
        //     }
        // ]
        //localStorage.setItem('todos', JSON.stringify(demoTodos))
        // return demoTodos
    } else
        return todos
}

function addTodo(txt) {
    const newTodo = createTodo(txt)
    const todos = getTodos()
    todos.push(newTodo)
    localStorage.setItem('todos', JSON.stringify(todos))
}

function createTodo(txt) {
    const todos = getTodos()
    let currInx = todos.length + 1
    return {
        id: currInx++,
        txt
    }
}

function changeTodoIdx(todoId, inc) {
    const todos = getTodos();
    const todoToChange = todos.find((todo) => todo.id === todoId)
    const currentIndex = todos.indexOf(todoToChange)

    const newIndex = currentIndex + inc;
    if (newIndex < 0 || newIndex >= todos.length) return
    [todos[currentIndex], todos[newIndex]] = [todos[newIndex], todos[currentIndex]];

    todos.forEach((todo, index) => {
        todo.id = index + 1;
    });
    console.log(todos)
    localStorage.setItem('todos', JSON.stringify(todos));
}

function removeTodo(todoId) {
    let todos = getTodos()
    todos = todos.filter((todo) => todo.id !== todoId)
    todos.forEach((todo, index) => {
        todo.id = index + 1;
    });
    localStorage.setItem('todos', JSON.stringify(todos))
}
function clearList() {
    localStorage.setItem('todos', JSON.stringify([]))
}


