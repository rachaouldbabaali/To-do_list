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
        <input type="checkbox" class="checkbox" id="${task.index}" ${task.completed ? 'checked' : ''}>
        <input class=" task task-description " id="${task.index}" value= "${task.description}">  
        <label class="label"><i class="fas fa-checked "></i></label>
        <a href="#" id ="delete-btn" data-task=${task.index}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill delete" viewBox="0 0 16 16">
        <path class="deleteFromPath" d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
        </svg></a>
        `;
    list.appendChild(row);
  }

  static deleteTask(el) {
    el.parentNode.remove();
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

  static editTask(index) {
    const task = Store.getTasks(index);
    const input = document.querySelector('.task-description');
    task.description = input.value;
    task.completed = false;
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
  // validate
  if (description === '') {
    UI.showAlert('Please add a task', 'danger');
  } else if (Store.checkTask(description)) {
    UI.showAlert('Task already in the list', 'danger');
  } else {
  // Instantiate task
    const task = new Task(description, false);
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
  const parentBtn = e.target.closest('#delete-btn');
  const taskIndex = parentBtn.dataset.task;
  UI.deleteTask(parentBtn);
  // Remove task from localStorage
  Store.removeTask(taskIndex);
});

// Event: Edit a Task on change
document.querySelector('#tasks').addEventListener('change', (e) => {
  e.preventDefault();
  // get the index of the task
  const index = e.target.id;
  UI.editTask(index, e.target.value);
  UI.showAlert('Task Updated', 'success');
  // Update task in localStorage
  Store.updateTask(index, e.target.value);
});






    

// the function of checkebox
document.querySelector('#tasks').addEventListener('click', (e) => {
  e.preventDefault();
  const parentBtn = e.target.closest('.checkbox');
  const taskIndex = parentBtn.id;
  const task = Store.getTasks(taskIndex);
  task.completed = !task.completed;
  if (task.completed) {
    parentBtn.classList.add('completed');
  } else {
    parentBtn.classList.remove('completed');
    task.completed = !task.completed;
  }
  Store.updateCheckbox(taskIndex, task.completed);
});

// Event: Clear All completed Tasks
document.querySelector('#clear-btn').addEventListener('click', (e) => {
  e.preventDefault();
  // remove selected tasks from localStorage
  Store.clearCompletedTasks();
  
  
  // clear the UI
  const list = document.querySelector('#tasks');
  list.innerHTML = '';
  UI.showAlert('All completed tasks have been removed', 'success');
});