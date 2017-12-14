class Todo {
    constructor(message) {
        this.id = new Date().getTime();
        this.message = '';
        this.isCompleted = false;

        if (typeof message !== 'undefined') {
            this.message = message;
        }
    }
}

export default Todo;