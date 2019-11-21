import { renderTaskCount, renderTasks, renderLists } from './render';
import { clearElement } from './helper';
import { display } from './display';

const LOCAL_STORAGE_LIST_KEY = 'task.lists';
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListId';
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);

const listsContainer = document.querySelector('[data-lists]');
const newListForm = document.querySelector('[data-new-list-form]');
const newListInput = document.querySelector('[data-new-list-input]');
const deleteListButton = document.querySelector('[data-delete-list-button]');
const tasksContainer = document.querySelector('[data-tasks]');
const newTaskForm = document.querySelector('[data-new-task-form]');
const newTaskInput = document.querySelector('[data-new-task-input]');
const clearCompleteTasksButton = document.querySelector('[data-clear-complete-tasks-button]');

const addingEntry = () => {

    const saveAndRender = () =>{
        save();
        todoList();
    } 
   
  listsContainer.addEventListener('click', e => {
    if(e.target.tagName.toLowerCase() === 'li'){
      selectedListId = e.target.dataset.listId
      saveAndRender();
    }
  });

  clearCompleteTasksButton.addEventListener('click', e => {
    const selectedList = lists.find(list => list.id === selectedListId);
    selectedList.tasks = selectedList.tasks.filter(task => !task.complete);
    saveAndRender();

    });  

  deleteListButton.addEventListener('click', e => {
      lists = lists.filter(list => list.id !== selectedListId);
      selectedListId = null;
      saveAndRender();
  });

  newListForm.addEventListener('submit', e =>{
    e.preventDefault();
    const listName = newListInput.value;
    if(listName == null || listName === '') return 
    const list = createList(listName);
    newListInput.value = null;
    lists.push(list);
    saveAndRender();
  });

  tasksContainer.addEventListener('click', e => {
    if(e.target.tagName.toLowerCase() === 'input'){
        const selectedList = lists.find(list => list.id === selectedListId);
        const selectedTask = selectedList.tasks.find(task => task.id === e.target.id);
        selectedTask.complete = e.target.checked;
        save();
        renderTaskCount(selectedList);
      }
  });


  newTaskForm.addEventListener('submit', e =>{
        e.preventDefault();
        const taskName = newTaskInput.value;
        if(taskName == null || taskName === '') return 
        const task = createTask(taskName);
        newTaskInput.value = null;
        const selectedList = lists.find(list => list.id === selectedListId);
        selectedList.tasks.push(task);
        saveAndRender();
  });
    
}

const todoList = () => {

    const selectedList = lists.find(list => list.id === selectedListId);

    clearElement(listsContainer);
    renderLists(lists, listsContainer, selectedListId);
    renderTasks(selectedList);
    display(selectedList, selectedListId);

};

const save = () => {
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));
    localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId);
};


const createList = (name) => {
 return {id: Date.now().toString(), name: name, tasks: []};
};


const createTask = (name) => {
    return {id: Date.now().toString(), name: name, complete: false};
}

todoList();
addingEntry();