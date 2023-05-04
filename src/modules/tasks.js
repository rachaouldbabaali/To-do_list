// create class for tasks
class Task {
  static index = 0;

  // eslint-disable-next-line no-unused-vars
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}
export default Task;
