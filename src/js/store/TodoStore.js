import BaseStore from "../classes/BaseStore";
import Todo from "../classes/Todo";

class TodoStore extends BaseStore {
    constructor() {
        super();
        this.DISPATCHER_CREATE_TODO = 'CREATE_TODO';
        this.DISPATCHER_UPDATE_CURRENT_TODO_MESSAGE = 'UPDATE_CURRENT_TODO_MESSAGE';
        this.DISPATCHER_RESET_CURRENT_TODO = 'RESET_CURRENT_TODO';
        this._currentTodo = new Todo();
        this._todos = [];
    }

    getCurrentTodo() {
        return this._currentTodo;
    }

    getList() {
        return this._todos;
    }

    _appendTodo(todo) {
        this._todos.push(todo);
    }

    _updateCurrentTodoMessage(message) {
        this._currentTodo.message = message;
    }

    _resetCurrentTodo() {
        this._currentTodo = new Todo();
    }

    dispatchHandler(action) {
        switch (action.actionType) {
            case this.DISPATCHER_CREATE_TODO:
                this._appendTodo(action.todo);
                break;

            case this.DISPATCHER_UPDATE_CURRENT_TODO_MESSAGE:
                this._updateCurrentTodoMessage(action.message);
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