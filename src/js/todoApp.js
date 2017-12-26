import React from "react";
import ReactDOM from "react-dom";
import CreateTodoInput from "./components/CreateTodoInput";
import ToggleAllTodoCompletedCheckbox from "./components/ToggleAllTodoCompletedCheckbox";
import TodoList from "./components/TodoList";
import TodoCountSpan from "./components/TodoCountSpan";
import TodoFilters from "./components/TodoFilters";
import ClearAllCompletedTodoButton from "./components/ClearAllCompletedTodoButton";

ReactDOM.render(
    <section className="todoapp">
        <div>
            <header className="header">
                <h1>todos</h1>
                <CreateTodoInput />
            </header>
            <section className="main">
                <ToggleAllTodoCompletedCheckbox />
                <TodoList />
            </section>
            <footer className="footer">
                <TodoCountSpan />
                <TodoFilters />
                <ClearAllCompletedTodoButton />
            </footer>
        </div>
    </section>,
    document.getElementById("todoApp")
);