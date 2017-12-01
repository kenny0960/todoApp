class Todo {
    constructor(message) {
        this.message = '';
        this.isCompleted = false;

        if (typeof message !== 'undefined') {
            this.message = message;
        }
    }
}

export default Todo;