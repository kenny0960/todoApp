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

    updateTodo(todo) {
        this._store.getDispatcher().dispatch({
            actionType: this._store.DISPATCHER_UPDATE_TODO,
            todo: todo
        });
    }

    destroyTodo(todo) {
        this._store.getDispatcher().dispatch({
            actionType: this._store.DISPATCHER_DESTROY_TODO,
            todo: todo
        });
    }

    toggleTodoCompleted(todo) {
        this._store.getDispatcher().dispatch({
            actionType: this._store.DISPATCHER_TOGGLE_TODO_COMPLETED,
            todo: todo
        });
    }

    toggleAllTodoCompleted(isCompleted) {
        this._store.getDispatcher().dispatch({
            actionType: this._store.DISPATCHER_TOGGLE_ALL_TODO_COMPLETED,
            isCompleted: isCompleted
        });
    }

    clearAllCompletedTodo() {
        this._store.getDispatcher().dispatch({
            actionType: this._store.DISPATCHER_CLEAR_ALL_COMPLETED_TODO
        });
    }

    setSelectedFilterLabel(label) {
        this._store.getDispatcher().dispatch({
            actionType: this._store.DISPATCHER_SET_SELECTED_FILTER_LABEL,
            label: label
        });
    }
}

export default new TodoActions();