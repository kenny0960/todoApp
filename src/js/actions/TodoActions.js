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

    updateCurrentTodoMessage(message) {
        this._store.getDispatcher().dispatch({
            actionType: this._store.DISPATCHER_UPDATE_CURRENT_TODO_MESSAGE,
            message: message
        });
    }

    resetCurrentTodo() {
        this._store.getDispatcher().dispatch({
            actionType: this._store.DISPATCHER_RESET_CURRENT_TODO
        });
    }
}

export default new TodoActions();