const todoFactory = () => {
  let todoItems = [];
  const input = document.querySelector('.js-todo-input');
  const list = document.querySelector('.js-todo-list');


  return {
    getItems: () => todoItems,
    getInput: () => input,
    getList() {
      return list;
    },

    toggleDone(key) {
      const index = todoItems.findIndex((item) => item.id === Number(key));
      todoItems[index].checked = !todoItems[index].checked;

      const item = document.querySelector(`[data-key='${key}']`);
      if (todoItems[index].checked) {
        item.classList.add('done');
      } else {
        item.classList.remove('done');
      }
    },

    addTodo(text) {
      const todo = {
        text,
        checked: false,
        id: Date.now(),
      };
      todoItems.push(todo);

      list.insertAdjacentHTML('beforeend', `
    <li class="todo-item" data-key="${todo.id}">
      <input id="${todo.id}" type="checkbox"/>
      <label for="${todo.id}" class="tick js-tick"></label>
      <span>${todo.text}</span>
      <button class="delete-todo js-delete-todo">
        <svg><use href="#delete-icon"></use></svg>
      </button>
    </li>
  `);
    },

    inlineAdd() {
      const text = input.value.trim();
      if (text !== '') {
        this.addTodo(text);
        input.value = '';
        input.focus();
      }
    },

    deleteTodo(key) {
      todoItems = todoItems.filter((item) => item.id !== Number(key));
      const item = document.querySelector(`[data-key='${key}']`);
      item.remove();
      if (todoItems.length === 0) list.innerHTML = '';
    },
  };
};

export default todoFactory;
