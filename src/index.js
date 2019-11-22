import todos from './todo';

// const LOCAL_STORAGE_LIST_KEY = 'task.lists';
// const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListId';
// const lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
// const selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);

const newTodo = todos();
const form = document.querySelector('.js-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  newTodo.inlineAdd();
  const item = newTodo.getItems();
  console.log(item);
});

// const list = document.querySelector('.js-todo-list');
const newList = newTodo.getList();
// console.log(newList);
newList.addEventListener('click', (event) => {
  if (event.target.classList.contains('js-tick')) {
    const itemKey = event.target.parentElement.dataset.key;
    newTodo.toggleDone(itemKey);
  }

  if (event.target.classList.contains('js-delete-todo')) {
    const itemKey = event.target.parentElement.dataset.key;
    newTodo.deleteTodo(itemKey);

    // const list = document.querySelector('.js-todo-list');
  }
});
