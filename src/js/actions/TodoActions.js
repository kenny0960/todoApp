import TodoStore from "../store/TodoStore";

class TodoActions {
    constructor() {
        this._store = TodoStore;
    }

    createTodo(todo) {
        this._store.getDispatcher().dispatch({
            actionType: this._store.DISPATCHER_CREATE_TODO,
            todo: todo
        });
    }
}

export default new TodoActions();