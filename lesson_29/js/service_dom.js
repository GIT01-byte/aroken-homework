import { todoKeys } from './constants.js';
import { createTodo, completeTodoById, deleteTodoById } from './service.js';
import { saveTodosLocalStorage } from './storage.js';

export const todoDOMForm = document.querySelector('.form');
export const todoDOMInput = document.querySelector('.input');
export const todosDOMList = document.querySelector('.todos');

const createTodoElement = (todo) => {
  const todoElement = document.createElement('li');
  todoElement.classList.add('todo');
  todoElement.dataset.id = todo[todoKeys.id];
  todoElement.innerHTML = `
    <div class="todo-text">${todo[todoKeys.text]}</div>
    <div class="todo-actions">
        <button class="button-complete button">&#10004;</button>
        <button class="button-delete button">&#10006;</button>
    </div>
  `;
  return todoElement;
};

export const renderTodos = (todos, container) => {
  container.innerHTML = '';
  todos.forEach((todo) => {
    const todoElement = createTodoElement(todo);
    if (todo[todoKeys.is_completed]) {
      todoElement.classList.add('completed');
    }
    container.prepend(todoElement);
  });
};

export const handleCreateTodo = (todos, text) => {
  const todo = createTodo(todos, text);
  const todoElement = createTodoElement(todo);
  saveTodosLocalStorage(todos);
  todosDOMList.prepend(todoElement);
};

export const initTodoHandlers = (todos) => {
  todoDOMForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(todoDOMForm);
    const text = formData.get(todoKeys.text).trim();
    if (!text) return;

    todoDOMForm.reset();

    handleCreateTodo(todos, text);
  });

  todosDOMList.addEventListener('click', ({ target }) => {
    const todo = target.closest('.todo');
    if (!todo) return;

    const todoId = Number(todo.dataset.id);

    if (target.matches('.button-complete')) {
      completeTodoById(todos, todoId);
      saveTodosLocalStorage(todos);
      todo.classList.toggle('completed');
    }

    if (target.matches('.button-delete')) {
      deleteTodoById(todos, todoId);
      saveTodosLocalStorage(todos);
      todo.remove();
    }
  });
};
