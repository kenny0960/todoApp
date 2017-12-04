import TodoStore from "../store/TodoStore";

class TodoActions {
    constructor() {
        this._store = TodoStore;
    }
}

export default new TodoActions();