class Todo {
    constructor(message) {
        this.id = new Date().getTime();
        this.message = '';
        this.isCompleted = false;

        if (typeof message !== 'undefined') {
            this.message = message;
        }
    }

    isEqual(todo) {
        if (todo.id === this.id && todo.message === this.message) {
            return true;
        }
        return false;
    }
}

export default Todo;