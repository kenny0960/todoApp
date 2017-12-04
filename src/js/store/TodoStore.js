import BaseStore from "../classes/BaseStore";
import Todo from "../classes/Todo";

class TodoStore extends BaseStore {
    constructor() {
        super();
        this.DISPATCHER_CREATE_TODO = 'CREATE_TODO';
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
        this._todos.push(todo)
    }

    dispatchHandler(action) {
        switch (action.actionType) {
            case this.DISPATCHER_CREATE_TODO:
                this._appendTodo(action.todo);
                break;

            //do nothing
            default:
                break;
        }
        this.emitChange();
    }
}

export default new TodoStore();