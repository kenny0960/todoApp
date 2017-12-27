import TodoStore from "../store/TodoStore";
import { TodoActionTypes } from "../constants/ActionTypes";

class TodoActions {
    constructor() {
        this._store = TodoStore;
    }

    createTodo(todo) {
        this._store.getDispatcher().dispatch({
            actionType: TodoActionTypes.CREATE_TODO,
            todo: todo
        });
    }

    updateTodo(todo) {
        this._store.getDispatcher().dispatch({
            actionType: TodoActionTypes.UPDATE_TODO,
            todo: todo
        });
    }

    destroyTodo(todo) {
        this._store.getDispatcher().dispatch({
            actionType: TodoActionTypes.DESTROY_TODO,
            todo: todo
        });
    }

    toggleTodoCompleted(todo) {
        this._store.getDispatcher().dispatch({
            actionType: TodoActionTypes.TOGGLE_TODO_COMPLETED,
            todo: todo
        });
    }

    toggleAllTodoCompleted(isCompleted) {
        this._store.getDispatcher().dispatch({
            actionType: TodoActionTypes.TOGGLE_ALL_TODO_COMPLETED,
            isCompleted: isCompleted
        });
    }

    clearAllCompletedTodo() {
        this._store.getDispatcher().dispatch({
            actionType: TodoActionTypes.CLEAR_ALL_COMPLETED_TODO
        });
    }

    setSelectedFilterLabel(label) {
        this._store.getDispatcher().dispatch({
            actionType: TodoActionTypes.SET_SELECTED_FILTER_LABEL,
            label: label
        });
    }
}

export default new TodoActions();