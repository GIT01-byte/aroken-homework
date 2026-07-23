'use strict';

// Функционал списка задач
const todoKeys = {
  id: 'ID',
  text: 'text',
  date: 'date',
  is_completed: 'is_completed',
};

const errTodoNotFound = (todoId) => `Todo with id ${todoId} not found`;

const todos = [];

const getNewTodoId = (todos) => {
  return (
    todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1
  );
};

const createTodo = (todos, text) => {
  const newTodo = {
    [todoKeys.id]: getNewTodoId(todos),
    [todoKeys.text]: text,
    [todoKeys.date]: new Date().toLocaleTimeString(),
    [todoKeys.is_completed]: false,
  };
  todos.push(newTodo);
  return newTodo;
};

const completeTodoById = (todos, todoId) => {
  const todo = todos.find((todo) => todo[todoKeys.id] === todoId);
  if (todo) {
    todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
    return todo;
  }
  console.error(errTodoNotFound(todoId));
  return null;
};

const editTodoTextById = (todos, todoId, todoText) => {
  const todo = todos.find((todo) => todo[todoKeys.id] === todoId);
  if (todo) {
    todo[todoKeys.text] = todoText;
    return todo;
  }
  console.error(errTodoNotFound(todoId));
  return null;
};

const deleteTodoById = (todos, todoId) => {
  const todoIndex = todos.findIndex((todo) => todo[todoKeys.id] === todoId);
  if (todoIndex === -1) {
    console.error(errTodoNotFound(todoId));
    return null;
  }
  todos.splice(todoIndex, 1);
  return todos;
};

// DOM манипуляции
const todoDOMForm = document.querySelector('.form');
const todoDOMInput = document.querySelector('.input');
const todosDOMList = document.querySelector('.todos');

const createTodoElement = (text) => {
  todosDOMList.insertAdjacentHTML(
    'afterbegin',
    `
    <li class="todo">
        <div class="todo-text">${text}</div>
        <div class="todo-actions">
            <button class="button-complete button">&#10004;</button>
            <button class="button-delete button">&#10006;</button>
        </div>
    </li>
    `,
  );
};

const handleCreateTodo = (todos, text) => {
  createTodo(todos, text);
  createTodoElement(text);
  return;
};

const handleFormTodosSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(todoDOMForm);
  const text = formData.get(todoKeys.text).trim();
  if (!text) return;

  todoDOMForm.reset();

  handleCreateTodo(todos, text);
};

todoDOMForm.addEventListener('submit', handleFormTodosSubmit);
