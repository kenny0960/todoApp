import React from "react";
import TodoStore from "../store/TodoStore";
import TodoActions from "../actions/TodoActions";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
    constructor() {
        super();
        this._store = TodoStore;
        this._actions = TodoActions;
        this.state = this.getStateFromStore();
        this.handleStoreChange = this.handleStoreChange.bind(this);
    }

    getStateFromStore() {
        return {
            todos: this._store.getFilteredList()
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

    getTodoList(todos) {
        let doms = [];
        for (const todo of todos) {
            doms.push(
                this.getTodoItem(todo)
            );
        }
        return <ul className="todo-list">
            {doms}
        </ul>;
    }

    getTodoItem(todo) {
        return <TodoItem
            key={todo.id}
            todo={todo}
        />;
    }

    render() {
        const todos = this.state.todos;

        if (todos.length === 0) {
            return null;
        }

        return this.getTodoList(todos);
    }
}

export default TodoList;