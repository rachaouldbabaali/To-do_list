import './styles/main.scss';
import Task from './modules/tasks.js';
import Store from './modules/store.js';
// UI c!lass handles ui tasks
class UI {
  static displayTasks() {
    const tasks = Store.getTasks();
    tasks.forEach((task) => UI.addTaskToList(task));
  }

  static addTaskToList(task) {
    const list = document.querySelector('#tasks');
    const row = document.createElement('li');
    row.innerHTML = `
        <input type="checkbox" class="checkbox">
        <div id=${task.index} class="task-description">${task.description}</div>
        <label class="label"><i class="fas fa-check"></i></label>
        <a href="#" class ='edit' > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square edit" viewBox="0 0 16 16">
        <path class='edit' d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
        </svg></a>
        <a href="#" id ="delete-btn" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill delete" viewBox="0 0 16 16">
        <path class="deleteFromPath" d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
        </svg></a>
        `;
    list.appendChild(row);
  }

  static deleteTask(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    } else if (el.classList.contains('deleteFromPath')) {
      el.parentElement.parentElement.parentElement.remove();
    }
  }

  static showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const msg = document.querySelector('.msg');
    msg.appendChild(div);
    // Vanish in 3 seconds
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
  }

  static clearFields() {
    document.querySelector('#todo-input').value = '';
  }
}

// Event: Display Tasks
// document.addEventListener('DOMContentLoaded', UI.displayTasks);
document.addEventListener('DOMContentLoaded', () => {
  const tasks = Store.getTasks();
  tasks.forEach((task) => {
    UI.addTaskToList(task);
  });
});

// Event: Add a Task
document.querySelector('#todo-form').addEventListener('submit', (e) => {
  // Prevent actual submit
  e.preventDefault();

  // Get form values
  const description = document.querySelector('#todo-input').value;
  const completed = false;
  // validate
  if (description === '') {
    UI.showAlert('Please add a task', 'danger');
  } else if (Store.checkTask(description)) {
    UI.showAlert('Task already in the list', 'danger');
  } else {
  // Instantiate task
    const task = new Task(description, completed);
    // Add task to UI
    UI.addTaskToList(task);
    UI.showAlert('Task Added', 'success');
    // Add task to store
    Store.addTask(task);

    // Clear fields
    UI.clearFields();
  }
});

// Event: Remove a Task
document.querySelector('#tasks').addEventListener('click', (e) => {
  e.preventDefault();
  UI.deleteTask(e.target);
    // Remove task from localStorage
    Store.removeTask(e.target.parentElement.parentElement.children.id);
});
