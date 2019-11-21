const renderTaskCount = (selectedList) => {
    const listCountElement = document.querySelector('[data-list-count]');

    const incompleteTasks = selectedList.tasks.filter(task =>
        !task.complete).length;
    const tasksString = incompleteTasks === 1 ? 'task' : 'tasks';
    listCountElement.innerText = `${incompleteTasks} ${tasksString} remaining`   
} 

const renderTasks = (selectedList) => {
    const tasksContainer = document.querySelector('[data-tasks]');
    const taskTemplate = document.getElementById('task-template');

    selectedList.tasks.forEach(task => {
        const taskElement = document.importNode(taskTemplate.content, true);
        const checkbox = taskElement.querySelector('input');
        checkbox.id = task.id;
        checkbox.checked = task.complete;
        const label = taskElement.querySelector('label');
        label.htmlFor = task.id;
        label.append(task.name);
        tasksContainer.appendChild(taskElement);
    });
}

const renderLists = (lists, listsContainer, selectedListId) => {

    lists.forEach(list => {
        const listElement = document.createElement('li');
        listElement.dataset.listId =list.id;
        listElement.classList.add('list-group-item');
        listElement.innerText = list.name;
        if(list.id === selectedListId){
        listElement.classList.add('active');
        }
        listsContainer.appendChild(listElement);
    });
}

export {renderTaskCount, renderTasks, renderLists};