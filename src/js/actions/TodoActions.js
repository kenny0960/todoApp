import TodoStore from "../store/TodoStore";
import { TodoActionTypes } from "../constants/ActionTypes";

class TodoActions {
    constructor() {
        this._dispatcher = TodoStore.getDispatcher();
    }

    createTodo(todo) {
        this._dispatcher.dispatch({
            actionType: TodoActionTypes.CREATE_TODO,
            todo: todo
        });
    }

    updateTodo(todo) {
        this._dispatcher.dispatch({
            actionType: TodoActionTypes.UPDATE_TODO,
            todo: todo
        });
    }

    destroyTodo(todo) {
        this._dispatcher.dispatch({
            actionType: TodoActionTypes.DESTROY_TODO,
            todo: todo
        });
    }

    toggleTodoCompleted(todo) {
        this._dispatcher.dispatch({
            actionType: TodoActionTypes.TOGGLE_TODO_COMPLETED,
            todo: todo
        });
    }

    toggleAllTodoCompleted(isCompleted) {
        this._dispatcher.dispatch({
            actionType: TodoActionTypes.TOGGLE_ALL_TODO_COMPLETED,
            isCompleted: isCompleted
        });
    }

    clearAllCompletedTodo() {
        this._dispatcher.dispatch({
            actionType: TodoActionTypes.CLEAR_ALL_COMPLETED_TODO
        });
    }

    setSelectedFilterLabel(label) {
        this._dispatcher.dispatch({
            actionType: TodoActionTypes.SET_SELECTED_FILTER_LABEL,
            label: label
        });
    }
}

export default new TodoActions();