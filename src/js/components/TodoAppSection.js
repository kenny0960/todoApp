import React from "react";
import CreateTodoInput from "./CreateTodoInput";
import ToggleAllTodoCompletedCheckbox from "./ToggleAllTodoCompletedCheckbox";
import TodoList from "./TodoList";
import TodoCountSpan from "./TodoCountSpan";
import TodoFilters from "./TodoFilters";
import ClearAllCompletedTodoButton from "./ClearAllCompletedTodoButton";

class TodoAppSection extends React.Component {
    getHeaderSection() {
        return (
            <header className="header">
                <h1>todos</h1>
                <CreateTodoInput />
            </header>
        );
    }

    getMainSection() {
        return (
            <section className="main">
                <ToggleAllTodoCompletedCheckbox />
                <TodoList />
            </section>
        );
    }

    getFooterSection() {
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