import React from "react";
import TodoStore from "../store/TodoStore";
import TodoActions from "../actions/TodoActions";

class ToggleAllTodoCompletedCheckbox extends React.Component {
    constructor() {
        super();
        this._store = TodoStore;
        this._actions = TodoActions;
        this.state = this.getStateFromStore();
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.toggleAllTodoCompleted = this.toggleAllTodoCompleted.bind(this);
    }

    getStateFromStore() {
        return {
            isAllTodoCompleted: this._store.isAllTodoCompleted()
        };
    }

    componentDidMount() {
        this._store.addChangeListener(this.handleStoreChange);
    }

    componentWillUnmount() {
        this._store.removeChangeListener(this.handleStoreChange);
    }

    handleStoreChange() {
        this.setState(
            this.getStateFromStore()
        );
    }

    toggleAllTodoCompleted(event) {
        const isCompleted = event.target.checked;
        this._actions.toggleAllTodoCompleted(isCompleted);
    }

    render() {
        return <input
            className="toggle-all"
            type="checkbox"
            onClick={this.toggleAllTodoCompleted}
            checked={this.state.isAllTodoCompleted}
        />;
    }
}

export default ToggleAllTodoCompletedCheckbox;