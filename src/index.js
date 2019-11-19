

let lists = [{
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