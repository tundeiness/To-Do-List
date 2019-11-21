const toDoList = () => {
  const listsContainer = document.querySelector('[data-lists]');
  const newListForm = document.querySelector('[data-new-list-form]');
  const newListInput = document.querySelector('[data-new-list-input]');
  const deleteListButton = document.querySelector('[data-delete-list-button]');
  // const listTitle = document.querySelector('[data-title]');
  // const taskContainer = document.querySelector('[data-tasks]');
  // const newTaskForm = document.querySelector('[data-task-form]');
  // const taskInput = document.querySelector('[data-task-input]');

  return {
    getListsContainer: () => listsContainer,
    getListForm: () => newListForm,
    getListInput: () => newListInput,
    getDeleteItems: () => deleteListButton,
    // getTaskContainer: () => taskContainer,
    // getTaskForm: () => newTaskForm,
    // getTaskInput: () => taskInput,
    // createTask: (name) => ({ id: Date.now().toString(), name, complete: false }),
  };
};

export default toDoList;
