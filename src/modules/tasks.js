// create class for tasks
class Task {
  static index = 0;

  // eslint-disable-next-line no-unused-vars
  constructor(description, completed, index) {
    Task.index += 1;
    this.description = description;
    this.completed = completed;
    this.index = Task.index;
  }
}
export default Task;
