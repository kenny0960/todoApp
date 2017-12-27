import React from "react";
import TodoStore from "../store/TodoStore";
import CreateTodoInput from "./CreateTodoInput";
import ToggleAllTodoCompletedCheckbox from "./ToggleAllTodoCompletedCheckbox";
import TodoList from "./TodoList";
import TodoCountSpan from "./TodoCountSpan";
import TodoFilters from "./TodoFilters";
import ClearAllCompletedTodoButton from "./ClearAllCompletedTodoButton";

class TodoAppSection extends React.Component {
    constructor() {
        super();
        this._store = TodoStore;
        this.state = this.getStateFromStore();
        this.handleStoreChange = this.handleStoreChange.bind(this);
    }

    getStateFromStore() {
        return {
            isListEmpty: this._store.getAllTodos().length === 0
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

    getHeaderSection() {
        return (
            <header className="header">
                <h1>todos</h1>
                <CreateTodoInput />
            </header>
        );
    }

    getMainSection() {
        if (this.state.isListEmpty) {
            return null;
        }
        return (
            <section className="main">
                <ToggleAllTodoCompletedCheckbox />
                <TodoList />
            </section>
        );
    }

    getFooterSection() {
        if (this.state.isListEmpty) {
            return null;
        }
        return (
            <footer className="footer">
                <TodoCountSpan />
                <TodoFilters />
                <ClearAllCompletedTodoButton />
            </footer>
        );
    }

    render() {
        return (
            <section className="todoapp">
                <div>
                    {this.getHeaderSection()}
                    {this.getMainSection()}
                    {this.getFooterSection()}
                </div>
            </section>
        );
    }
}

export default TodoAppSection;