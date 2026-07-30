document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const taskText = todoInput.value.trim();
        if (taskText) {
            addTodoItem(taskText);
            todoInput.value = '';
        }
    });

    function addTodoItem(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            todoList.removeChild(li);
        });

        li.appendChild(removeButton);
        todoList.appendChild(li);
    }
});