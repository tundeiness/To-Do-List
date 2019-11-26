const renderTaskCount = (selectedList) => {
  const listCountElement = document.querySelector('[data-list-count]');
  const incompleteTasks = selectedList.tasks.filter(task => !task.complete).length;
  const tasksString = incompleteTasks === 1 ? 'task' : 'tasks';
  listCountElement.innerText = `${incompleteTasks} ${tasksString} remaining`;
};

const updateValues = (update, close, label, date, priority, templateDiv, btn) => {
  update.addEventListener('click', (e) => {
    const newLabel = label;
    const newDate = date;
    const newPrority = priority;
    e.preventDefault();
    const editName = document.getElementById('edit-name').value;
    const editDate = document.getElementById('edit-date').value;
    const editRange = document.getElementById('edit-range').value;
    newLabel.innerHTML = '';
    newDate.innerHTML = '';
    newPrority.innerHTML = '';
    newLabel.append(editName);
    newDate.append(editDate);
    newPrority.append(editRange);
  });

  templateDiv.setAttribute('class', 'visible');

  close.addEventListener('click', (e) => {
    e.preventDefault();
    templateDiv.setAttribute('class', 'hidden');
    btn.removeAttribute('class', 'hidden');
    btn.setAttribute('class', 'btn btn-warning edit');
  });
};

const editTask = (btn, editing, taskName, taskDate, taskPriority, label, date, priority) => {
  btn.setAttribute('class', 'btn btn-warning edit');
  const editTemplate = document.getElementById('edit-template');
  btn.addEventListener('click', (e) => {
    const taskElement = document.importNode(editTemplate.content, true);
    e.preventDefault();
    const editName = taskElement.getElementById('edit-name');
    const editDate = taskElement.getElementById('edit-date');
    const editRange = taskElement.getElementById('edit-range');
    const updateBtn = taskElement.getElementById('update');
    const closeBtn = taskElement.getElementById('close');
    const templateDiv = taskElement.getElementById('edit-div');
    editName.value = taskName;
    editDate.value = taskDate;
    editRange.value = taskPriority;
    updateValues(updateBtn, closeBtn, label, date, priority, templateDiv, btn);
    editing.append(taskElement);
    btn.setAttribute('class', 'hidden');
  });
};

const renderTasks = (selectedList) => {
  const tasksContainer = document.querySelector('[data-tasks]');
  const taskTemplate = document.getElementById('task-template');

  selectedList.tasks.forEach((task) => {
    const taskElement = document.importNode(taskTemplate.content, true);
    const checkbox = taskElement.querySelector('[check]');
    const editTaskButton = document.createElement('button');
    editTaskButton.innerHTML = 'Edit';
    checkbox.id = task.id;
    checkbox.checked = task.complete;
    const label = taskElement.getElementById('taskName');
    const date = taskElement.getElementById('taskDate');
    const priority = taskElement.getElementById('taskPriority');
    const editing = taskElement.getElementById('edit-section');
    label.htmlFor = task.id;
    label.append(task.name);
    date.append(task.date);
    priority.append(task.priority);
    taskElement.append(editTaskButton);
    tasksContainer.appendChild(taskElement);
    editTask(editTaskButton, editing, task.name, task.date, task.priority, label, date, priority);
  });
};

const renderLists = (lists, listsContainer, selectedListId) => {
  lists.forEach((list) => {
    const listElement = document.createElement('li');
    listElement.dataset.listId = list.id;
    listElement.classList.add('list-group-item');
    listElement.innerText = list.name;
    if (list.id === selectedListId) {
      listElement.classList.add('active');
    }
    listsContainer.appendChild(listElement);
  });
};

export { renderLists, renderTaskCount, renderTasks };
