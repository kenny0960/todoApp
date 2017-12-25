import React from "react";
import TodoStore from "../store/TodoStore";

class TodoCountSpan extends React.Component {
    constructor() {
        super();
        this._store = TodoStore;
        this.state = this.getStateFromStore();
        this.handleStoreChange = this.handleStoreChange.bind(this);
    }

    getStateFromStore() {
        return {
            count: this._store.getActiveTodos().length
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
        return (
            <span className="todo-count">
                <strong>{this.state.count}</strong>
                <span> items left</span>
            </span>
        );
    }
}

export default TodoCountSpan;