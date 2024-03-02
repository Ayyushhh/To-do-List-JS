document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.querySelector('.textarea');
    const addButton = document.querySelector('.buttoninput');
    const todoList = document.querySelector('.todolist');

    addButton.addEventListener('click', function () {
        const taskText = textarea.value.trim();

        if (taskText !== '') {
            const newItem = createTodoItem(taskText);
            todoList.appendChild(newItem);
            textarea.value = '';
        }
    });

    function createTodoItem(text) {
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('itemall');

        const itemBox = document.createElement('div');
        itemBox.classList.add('item-box');

        const item = document.createElement('div');
        item.classList.add('item');
        item.textContent = text;

        const checkButton = document.createElement('button');
        checkButton.classList.add('check-button');
        checkButton.innerHTML = '<i class="fas fa-check"></i>';
        checkButton.addEventListener('click', function () {
            item.classList.toggle('checklist');
        });

        const trashButton = document.createElement('button');
        trashButton.classList.add('trash-button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.addEventListener('click', function () {
            itemContainer.remove();
        });

        itemBox.appendChild(item);
        itemContainer.appendChild(itemBox);
        itemContainer.appendChild(checkButton);
        itemContainer.appendChild(trashButton);

        return itemContainer;
    }
});
