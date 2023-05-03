
import './styles/main.scss';
import tasks from './tasks.js';

function iterateTasks(tasks) {
// Create a new list element
const list = document.createElement('ul');

// Iterate over the tasks array
for (const task of tasks) {
    // Create a new list item element
    const li = document.createElement('li');

    // Set the text of the list item to the task
    li.textContent = task;

    // Append the list item to the list
    list.appendChild(li);
}

// Append the list to the DOM
document.getElementById('tasks').appendChild(list);
}