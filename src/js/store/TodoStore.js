import BaseStore from "../classes/BaseStore";

class TodoStore extends BaseStore {
    constructor() {
        super();
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