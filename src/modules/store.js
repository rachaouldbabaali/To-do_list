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
  }

  static removeTask(index) {
    const tasks = this.getTasks();
    tasks.splice(index, 1);
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
}
export default Store;