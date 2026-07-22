'use strict';

const todoKeys = {
  id: 'ID',
  text: 'text',
  date: 'date',
  is_completed: 'is_completed',
};

const errTodoNotFound = (todoId) => {
  return `Todo with id ${todoId} not found`;
};

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
  if (!todo) {
    console.error(errTodoNotFound(todoId));
    return null;
  }
  todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
  return todo;
};

const editTodoTextById = (todos, todoId, todoText) => {
  const todo = todos.find((todo) => todo[todoKeys.id] === todoId);
  if (!todo) {
    console.error(errTodoNotFound(todoId));
    return null;
  }
  todo[todoKeys.text] = todoText;
  return todo;
};

const deleteTodoById = (todos, todoId) => {
  const todoIndex = todos.findIndex((todo) => todo[todoKeys.id] === todoId);
  if (todoIndex == -1) {
    console.error(errTodoNotFound(todoId));
    return null;
  }
  todos.splice(todoIndex, 1);
  return todos;
};
