import BaseStore from "../classes/BaseStore";
import Todo from "../classes/Todo";

class TodoStore extends BaseStore {
    constructor() {
        super();
        this._currentTodo = new Todo();
        this._todos = [];
    }

    getCurrentTodo() {
        return this._currentTodo;
    }

    getList() {
        return this._todos;
    }

    dispatchHandler(action) {
        switch (action.actionType) {
            //do nothing
            default:
                break;
        }
        this.emitChange();
    }
}

export default new TodoStore();