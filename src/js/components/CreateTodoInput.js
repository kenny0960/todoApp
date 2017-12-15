import React from "react";
import TodoStore from "../store/TodoStore";

class CreateTodoInput extends React.Component {
    constructor() {
        super();
        this._store = TodoStore;
        this.state = this.getStateFromStore();
        this.handleStoreChange = this.handleStoreChange.bind(this);
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

    render() {
        const todo = this.state.todo;
        return <input
            className="new-todo"
            placeholder="What needs to be done?"
            value={todo.message}
        />;
    }
}

export default CreateTodoInput;