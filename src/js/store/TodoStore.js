import BaseStore from "../classes/BaseStore";
import Todo from "../classes/Todo";

class TodoStore extends BaseStore {
    constructor() {
        super();
        this.DISPATCHER_CREATE_TODO = 'CREATE_TODO';
        this.DISPATCHER_TOGGLE_TODO_COMPLETED = 'TOGGLE_TODO_COMPLETED';
        this.DISPATCHER_TOGGLE_ALL_TODO_COMPLETED = 'TOGGLE_ALL_TODO_COMPLETED';
        this.DISPATCHER_UPDATE_TODO = 'UPDATE_TODO';
        this.DISPATCHER_DESTROY_TODO = 'DESTROY_TODO';
        this.DISPATCHER_UPDATE_CURRENT_TODO_MESSAGE = 'UPDATE_CURRENT_TODO_MESSAGE';
        this.DISPATCHER_SET_SELECTED_FILTER_LABEL = 'SET_SELECTED_FILTER_LABEL';
        this.DISPATCHER_RESET_CURRENT_TODO = 'RESET_CURRENT_TODO';
        this._currentTodo = new Todo();
        this._todos = [];
        this._selectedFilterLabel = 'All';
    }

    getCurrentTodo() {
        return this._currentTodo;
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
            if (_todo.isEqual(todo)) {
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

    _appendTodo(todo) {
        this._todos.push(todo);
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

    _updateTodo(todo) {
        const index = this.getTodoIndex(todo);
        this._todos[index] = todo;
    }

    _destroyTodo(todo) {
        const index = this.getTodoIndex(todo);
        this._todos.splice(index, 1);
    }

    _updateCurrentTodoMessage(message) {
        this._currentTodo.message = message;
    }

    _setSelectedFilterLabel(label) {
        this._selectedFilterLabel = label;
    }

    _resetCurrentTodo() {
        this._currentTodo = new Todo();
    }

    dispatchHandler(action) {
        switch (action.actionType) {
            case this.DISPATCHER_CREATE_TODO:
                this._appendTodo(action.todo);
                break;

            case this.DISPATCHER_TOGGLE_TODO_COMPLETED:
                this._toggleTodoCompleted(action.todo);
                break;

            case this.DISPATCHER_TOGGLE_ALL_TODO_COMPLETED:
                this._toggleAllTodoCompleted(action.isCompleted);
                break;

            case this.DISPATCHER_UPDATE_TODO:
                this._updateTodo(action.todo);
                break;

            case this.DISPATCHER_DESTROY_TODO:
                this._destroyTodo(action.todo);
                break;

            case this.DISPATCHER_UPDATE_CURRENT_TODO_MESSAGE:
                this._updateCurrentTodoMessage(action.message);
                break;

            case this.DISPATCHER_SET_SELECTED_FILTER_LABEL:
                this._setSelectedFilterLabel(action.label);
                break;

            case this.DISPATCHER_RESET_CURRENT_TODO:
                this._resetCurrentTodo();
                break;

            //do nothing
            default:
                break;
        }
        this.emitChange();
    }
}

export default new TodoStore();