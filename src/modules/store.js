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
      console.log('index to be removed ',index);
      const tasks = this.getTasks();
      const filteredTasks = tasks.filter(ele=> {return ele.index!=index})
      localStorage.setItem('tasks', JSON.stringify(filteredTasks));
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