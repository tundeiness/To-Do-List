const todoList = () => {
  const listsContainer = document.querySelector('[data-lists]');
  const LOCAL_STORAGE_LIST_KEY = 'task.lists';
  const lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [{
    id: 1,
    name: 'test',
  }];


  this.clearElement(listsContainer);
  lists.forEach((list) => {
    const listElement = document.createElement('li');
    listElement.dataset.listId = list.id;
    listElement.classList.add('list-name');
    listElement.innerText = list.name;
    listsContainer.appendChild(listElement);
  });

  return {
    save: () => {
      localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));
    },
    clearElement: (element) => {
      while (element.firstChild) {
        element.removeChild(element.firstChild);
      }
    },
    getList: () => lists,

  };
};

export default todoList;
