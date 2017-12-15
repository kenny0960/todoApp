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

    render() {
        const todo = this.state.todo;
        return <input
            className="new-todo"
            placeholder="What needs to be done?"
            value={todo.message}
            onChange={this.handleInputChange}
        />;
    }
}

export default CreateTodoInput;