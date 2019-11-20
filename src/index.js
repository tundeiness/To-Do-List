
const LOCAL_STORAGE_LIST_KEY = 'task.lists';
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListId';
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);

const listsContainer = document.querySelector('[data-lists]');
const newListForm = document.querySelector('[data-new-list-form]');
const newListInput = document.querySelector('[data-new-list-input]');
const deleteListButton = document.querySelector('[data-delete-list-button]');

const addingEntry = () => {



  listsContainer.addEventListener('click', e => {
    if(e.target.tagName.toLowerCase() === 'li'){
      selectedListId = e.target.dataset.listId
      save();
      todoList();
    }
  });

  deleteListButton.addEventListener('click', e => {
      lists = lists.filter(list => list.id !== selectedListId);
      selectedListId = null;
      save();
      todoList();
  });

  newListForm.addEventListener('submit', e =>{
    e.preventDefault();
    const listName = newListInput.value;
    if(listName == null || listName === '') return 
    const list = createList(listName);
    newListInput.value = null;
    lists.push(list);
    save();
    todoList();
});

}

const todoList = () => {

    clearElement(listsContainer)
    lists.forEach(list => {
        const listElement = document.createElement('li');
        listElement.dataset.listId =list.id;
        listElement.classList.add('list-group-item');
        listElement.innerText = list.name;
        if(list.id === selectedListId){
            console.log(selectedListId);
        listElement.classList.add('active');
        }
        listsContainer.appendChild(listElement);
    })

  
};

const save = () => {
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));
    localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId);
};

const clearElement = (element) =>{
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
};

const createList = (name) => {
 return {id: Date.now().toString(), name: name, tasks: []}
};

todoList();
addingEntry();