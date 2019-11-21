import {renderTaskCount, renderTasks} from './render';
import {clearElement} from './helper';

const display = (selectedList, selectedListId) => {

    const listDisplayContainer = document.querySelector('[data-list-display-container]');
    const listTitleElement = document.querySelector('[data-list-title]');
    const tasksContainer = document.querySelector('[data-tasks]');

    if(selectedListId == null){
        listDisplayContainer.style.display = 'none';
    }
    else{
        listDisplayContainer.style.display = '';
        listTitleElement.innerText = selectedList.name;
        renderTaskCount(selectedList);
        clearElement(tasksContainer);
        renderTasks(selectedList);
     }
}

export {display};