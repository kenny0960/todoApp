import React from "react";
import TodoStore from "../store/TodoStore";
import TodoActions from "../actions/TodoActions";

class ClearAllCompletedTodoButton extends React.Component {
    constructor() {
        super();
        this._store = TodoStore;
        this._actions = TodoActions;
        this.state = this.getStateFromStore();
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    getStateFromStore() {
        return {
            isAllTodoActive: this._store.isAllTodoActive()
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

    handleButtonClick() {
        this._actions.clearAllCompletedTodo();
    }

    render() {
        if (this.state.isAllTodoActive) {
            return null;
        }
        return (
            <button
                className="clear-completed"
                onClick={this.handleButtonClick}
            >Clear completed</button>
        );
    }
}

export default ClearAllCompletedTodoButton;