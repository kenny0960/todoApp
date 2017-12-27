import BaseStore from "../classes/BaseStore";
import { TodoActionTypes } from "../constants/ActionTypes";
import { TodoFilterLabels } from "../constants/TodoFilterConstants";

class TodoStore extends BaseStore {
    constructor() {
        super();
        this._todos = [];
        this._selectedFilterLabel = TodoFilterLabels.ALL;
    }

    getFilteredList() {
        let filter = [];
        switch (this._selectedFilterLabel) {
            case TodoFilterLabels.ALL:
                filter = this.getAllTodos();
                break;

            case TodoFilterLabels.ACTIVE:
                filter = this.getActiveTodos();
                break;

            case TodoFilterLabels.COMPLETED:
                filter = this.getCompletedTodos();
                break;
        }
        return filter;
    }

    getAllTodos() {
        return this._todos;
    }

    getActiveTodos() {
        let activeTodos = [];
        for (const _todo of this._todos) {
            if ( ! _todo.isCompleted){
                activeTodos.push(_todo);
            }
        }
        return activeTodos;
    }

    getCompletedTodos() {
        let activeTodos = [];
        for (const _todo of this._todos) {
            if (_todo.isCompleted){
                activeTodos.push(_todo);
            }
        }
        return activeTodos;
    }

    getTodoIndex(todo) {
        for (const index in this._todos) {
            const _todo = this._todos[index];
            if (_todo.id === todo.id) {
                return index;
            }
        }
    }

    getSelectedFilterLabel() {
        return this._selectedFilterLabel;
    }

    isAllTodoCompleted() {
        if (this._todos.length === 0) {
            return false;
        }
        for (const _todo of this._todos) {
            if ( ! _todo.isCompleted){
                return false;
            }
        }
        return true;
    }

    isAllTodoActive() {
        for (const _todo of this._todos) {
            if (_todo.isCompleted){
                return false;
            }
        }
        return true;
    }

    _appendTodo(todo) {
        this._todos.push(todo);
    }

    _updateTodo(todo) {
        const index = this.getTodoIndex(todo);
        this._todos[index] = todo;
    }

    _destroyTodo(todo) {
        const index = this.getTodoIndex(todo);
        this._todos.splice(index, 1);
    }

    _toggleTodoCompleted(todo) {
        const index = this.getTodoIndex(todo);
        this._todos[index].isCompleted = ! todo.isCompleted;
    }

    _toggleAllTodoCompleted(isCompleted) {
        for (const _todo of this._todos) {
            _todo.isCompleted = isCompleted;
        }
    }

    _clearAllCompletedTodo() {
        let todos = this.getCompletedTodos();
        for (const todo of todos) {
            this._destroyTodo(todo);
        }
    }

    _setSelectedFilterLabel(label) {
        this._selectedFilterLabel = label;
    }

    dispatchHandler(action) {
        switch (action.actionType) {
            case TodoActionTypes.CREATE_TODO:
                this._appendTodo(action.todo);
                break;

            case TodoActionTypes.UPDATE_TODO:
                this._updateTodo(action.todo);
                break;

            case TodoActionTypes.DESTROY_TODO:
                this._destroyTodo(action.todo);
                break;

            case TodoActionTypes.TOGGLE_TODO_COMPLETED:
                this._toggleTodoCompleted(action.todo);
                break;

            case TodoActionTypes.TOGGLE_ALL_TODO_COMPLETED:
                this._toggleAllTodoCompleted(action.isCompleted);
                break;

            case TodoActionTypes.CLEAR_ALL_COMPLETED_TODO:
                this._clearAllCompletedTodo();
                break;

            case TodoActionTypes.SET_SELECTED_FILTER_LABEL:
                this._setSelectedFilterLabel(action.label);
                break;

            //do nothing
            default:
                break;
        }
        this.emitChange();
    }
}

export default new TodoStore();