"use strict";

function init() {
    renderTodos();
}

function renderTodos() {
    const todos = getTodos();
    const strHTMLs = todos.map((todo) => {
        return `
        <li class="todo-item">
            <span class="todo-id">${todo.id}. </span>
            <span class="todo-content">${todo.txt}</span>
            <button class="btn delete-btn" onClick="onDeleteTodo(event, ${todo.id})">Delete</button>
            <button class="btn btn-up" onClick="onChangeTodoInx(event, ${todo.id}, -1)">UP</button>
            <button class="btn btn-down" onClick="onChangeTodoInx(event, ${todo.id}, 1)">DOWN</button>
        </li>
        `;

    }).join('')
    const elList = document.querySelector('.list')
    elList.innerHTML = strHTMLs
}

function onDeleteTodo(ev, todoId) {
    removeTodo(todoId)
    renderTodos()
}

function onChangeTodoInx(ev, todoId, inc) {
    ev.stopPropagation()

    changeTodoIdx(todoId, inc)
    renderTodos()
}

function onAddTodo(ev) {
    ev.preventDefault()
    const elInput = document.querySelector('[name=txt]')
    const userInput = elInput.value
    if (userInput.length >= 30 || userInput.length === 0) return
    addTodo(userInput)
    renderTodos()
    elInput.value = ""
}
function onClearList() {
    clearList()
    renderTodos()
}

