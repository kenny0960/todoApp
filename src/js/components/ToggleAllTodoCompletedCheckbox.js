import React from "react";
import TodoActions from "../actions/TodoActions";

class ToggleAllTodoCompletedCheckbox extends React.Component {
    constructor() {
        super();
        this._actions = TodoActions;
        this.toggleAllTodoCompleted = this.toggleAllTodoCompleted.bind(this);
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
        />;
    }
}

export default ToggleAllTodoCompletedCheckbox;