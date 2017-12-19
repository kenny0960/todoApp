import React from "react";
import TodoStore from "../store/TodoStore";
import TodoActions from "../actions/TodoActions";

class CreateTodoInput extends React.Component {
    constructor() {
        super();
        this._store = TodoStore;
        this._actions = TodoActions;
        this.state = this.getStateFromStore();
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputKeyDown = this.handleInputKeyDown.bind(this);
    }

    getStateFromStore() {
        return {
            todo: this._store.getCurrentTodo()
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

    handleInputChange(event) {
        const message = event.target.value;
        this._actions.updateCurrentTodoMessage(message);
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

    createTodo() {
        const todo = this.state.todo;
        if (todo === '') {
            return;
        }
        this._actions.createTodo(todo);
    }

    render() {
        const todo = this.state.todo;
        return <input
            className="new-todo"
            placeholder="What needs to be done?"
            value={todo.message}
            onChange={this.handleInputChange}
            onKeyDown={this.handleInputKeyDown}
        />;
    }
}

export default CreateTodoInput;