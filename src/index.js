import './styles/main.scss';
import tasks from './modules/tasks.js';

const populateTaskList = () => {
  const taskList = document.getElementById('tasks');

  // Clear any existing list items
  taskList.innerHTML = '';

  // Iterate over the tasks array and create a list item for each task
  tasks.forEach((task) => {
    const listItem = document.createElement('li');
    listItem.classList.add('task');

    // Set the text content of the list item to the task description
    // listItem.textContent = task.description;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        listItem.classList.add('completed');
      } else {
        listItem.classList.remove('completed');
      }
    });
    const label = document.createElement('label');
    label.classList.add('label');
    const icon = document.createElement('i');
    icon.classList.add('fas', 'fa-check');
    label.appendChild(icon);
    listItem.appendChild(checkbox);
    listItem.appendChild(document.createTextNode(task.description));
    listItem.appendChild(label);

    // Add the list item to the task list
    taskList.appendChild(listItem);
  });
};
window.onload = () => {
  populateTaskList();
};