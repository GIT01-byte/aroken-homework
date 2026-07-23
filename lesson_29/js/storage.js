export const saveTodosLocalStorage = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

export const getTodosLocalStorage = () => {
  return JSON.parse(localStorage.getItem('todos'));
};
