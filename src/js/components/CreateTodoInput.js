import React from "react";
import TodoActions from "../actions/TodoActions";
import Todo from "../classes/Todo";

class CreateTodoInput extends React.Component {
    constructor() {
        super();
        this._actions = TodoActions;
        this.state = {
            message: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputKeyDown = this.handleInputKeyDown.bind(this);
    }

    handleInputChange(event) {
        const message = event.target.value;
        this.updateMessage(message);
    }

    handleInputKeyDown(event) {
        switch (event.key) {
            case 'Enter':
                this.createTodo();
                break;

            default:
                return;
        }
    }

    updateMessage(message) {
        this.setState({
            message: message
        });
    }

    resetMessage() {
        this.updateMessage('');
    }

    createTodo() {
        const message = this.state.message;
        if (message === '') {
            return;
        }
        this._actions.createTodo(new Todo(message));
        this.resetMessage();
    }

    render() {
        return <input
            className="new-todo"
            placeholder="What needs to be done?"
            value={this.state.message}
            onChange={this.handleInputChange}
            onKeyDown={this.handleInputKeyDown}
        />;
    }
}

export default CreateTodoInput;