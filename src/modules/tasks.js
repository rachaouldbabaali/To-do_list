// create class for tasks
class Task {
  static #index = 0;

  // eslint-disable-next-line no-unused-vars
  constructor(description, completed) {
    this.description = description;
    this.completed = completed;
    this.index = Task.#index;
    // eslint-disable-next-line no-plusplus
    Task.#index++;
  }
}
export default Task;
