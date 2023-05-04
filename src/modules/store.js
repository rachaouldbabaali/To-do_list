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

    static getTaskByIndex(index) {
        const tasks = this.getTasks();
        return tasks[index];
    }

    static editTask(index, description) {
        const tasks = this.getTasks();
        tasks[index].description = description;
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}
export default Store;