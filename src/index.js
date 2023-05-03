import './styles/main.scss';
import tasks from './modules/tasks.js';

function populateTaskList(tasks) {
  const taskList = document.getElementById('tasks');

  // Clear any existing list items
  taskList.innerHTML = '';

  // Iterate over the tasks array and create a list item for each task
  tasks.forEach((task) => {
    const listItem = document.createElement('li');

    // Set the text content of the list item to the task description
    listItem.textContent = task.description;

    // Add a "completed" class to the list item if the task has been completed
    if (task.completed) {
      listItem.classList.add('completed');
    }

    // Add the list item to the task list
    taskList.appendChild(listItem);
  });
}
populateTaskList(tasks);