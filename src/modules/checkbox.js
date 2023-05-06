import Store from './store.js';

function handleCheckboxChange(taskIndex) {
  const checkbox = document.getElementById(`checky${taskIndex}`);
  const taski = document.getElementById(`${taskIndex}`);
  checkbox.addEventListener('change', () => {
    const task = Store.getTasks(taskIndex);
    task.completed = checkbox.checked;
    if (task.completed) {
      taski.classList.add('completed');
    } else {
      taski.classList.remove('completed');
    }
    Store.updateCheckbox(taskIndex, task.completed);
  });
}

export default handleCheckboxChange;