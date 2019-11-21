const task = () => {
  const listContainer = document.querySelector('[data-list-container]');
  const listTitle = document.querySelector('[data-title]');
  const taskContainer = document.querySelector('[data-tasks]');
  const newTaskForm = document.querySelector('[data-task-form]');
  const taskInput = document.querySelector('[data-task-input]');
  const taskTemplate = document.getElementById('task-template');

  return {
    getListContainer: () => listContainer,
    getListTitle: () => listTitle,
    getTaskContainer: () => taskContainer,
    getTaskForm: () => newTaskForm,
    getTaskInput: () => taskInput,
    getTaskTemplate: () => taskTemplate,
    // createTask: (name) => ({ id: Date.now().toString(), name, complete: false }),
    createTask: (name) => ({ id: Date.now().toString(), name, complete: false }),
  };
};

export default task;
