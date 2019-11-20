
import todoList from './toDo';

const addingEntry = () => {
  const newListForm = document.querySelector('[data-new-list-form]');
  const newListInput = document.querySelector('[data-new-list-input]');

  newListForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const listName = newListInput.value;
    if (listName == null || listName === '') return;
    const list = this.createList(listName);
    newListInput.value = null;
    const getlist = todoList();
    getlist.getList.push(list);
    const savin = todoList();
    savin.save();
    todoList();
  });

  return {
    createList: (name) => ({ id: Date.now().toString(), name, tasks: [] }),
  };
};

export default addingEntry;
