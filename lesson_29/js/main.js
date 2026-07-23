import { getTodosLocalStorage } from './storage.js';
import { renderTodos, todosDOMList, initTodoHandlers } from './service_dom.js';

export const todos = getTodosLocalStorage() || [];

document.addEventListener('DOMContentLoaded', () => {
  renderTodos(todos, todosDOMList);
});

initTodoHandlers(todos);
