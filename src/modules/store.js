class Store {
  static getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    return tasks;
  }

  static addTask(task) {
    const tasks = this.getTasks();
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    tasks.forEach((task) => {
      task.index = tasks.indexOf(task) + 1;
    });
  }

  static removeTask(index) {
    const tasks = this.getTasks();
    const filteredTasks = tasks.filter((ele) => ele.index != index);
    localStorage.setItem('tasks', JSON.stringify(filteredTasks));
  }

  static updateIndex() {
    const tasks = this.getTasks();
    tasks.forEach((task) => {
      task.index = tasks.indexOf(task) + 1;
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // check if task is already in the list
  static checkTask(description) {
    const tasks = Store.getTasks();
    let check = false;
    tasks.forEach((task) => {
      if (task.description.toUpperCase() === description.toUpperCase()) {
        check = true;
      }
    });
    return check;
  }

  // update task with the new description
  static updateTask(index, description) {
    const tasks = Store.getTasks();
    tasks.forEach((task) => {
      if (task.index == index) {
        task.description = description;
      }

      task.index = tasks.indexOf(task) + 1;
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  static updateCheckbox(index, completed) {
    const tasks = Store.getTasks();
    tasks.forEach((task) => {
      if (task.index == index) {
        task.completed = completed;
      }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  static clearCompletedTasks() {
    const tasks = Store.getTasks();
    const filteredTasks = tasks.filter((ele) => ele.completed != true);
    localStorage.setItem('tasks', JSON.stringify(filteredTasks));
  }
}
export default Store;