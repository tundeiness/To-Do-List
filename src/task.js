const task = () => {
  const listContainer = document.querySelector('[data-container]');
  const listTitle = document.querySelector('[data-title]');
  const taskContainer = document.querySelector('[data-tasks]');
  const newTaskForm = document.querySelector('[data-task-form]');
  const taskInput = document.querySelector('[data-task-input]');

  return {
    getListContainer: () => listContainer,
    getListTitle: () => listTitle,
    getTaskContainer: () => taskContainer,
    getTaskForm: () => newTaskForm,
    getTaskInput: () => taskInput,
    createTask: (name) => ({ id: Date.now().toString(), name, complete: false }),
  };
};

export default task;
