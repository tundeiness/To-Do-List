
const LOCAL_STORAGE_LIST_KEY = 'task.lists';
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [{
    id: 1,
    name: 'test'
}];

const addingEntry = () => {

const newListForm = document.querySelector('[data-new-list-form]');
const newListInput = document.querySelector('[data-new-list-input]');

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

const listsContainer = document.querySelector('[data-lists]');

    clearElement(listsContainer)
    lists.forEach(list => {
        const listElement = document.createElement('li');
        listElement.dataset.listId =list.id;
        listElement.classList.add('list-name');
        listElement.innerText = list.name;
        listsContainer.appendChild(listElement);
    })

  
};

const save = () => {
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));
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