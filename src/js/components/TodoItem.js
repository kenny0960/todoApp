import React from "react";
import PropTypes from "prop-types";
import Todo from "../classes/Todo";
import TodoActions from "../actions/TodoActions";

class TodoItem extends React.Component {
    constructor() {
        super();
        this._actions = TodoActions;
        this.toggleTodoCompleted = this.toggleTodoCompleted.bind(this);
    }

    getTodoClassName(isCompleted) {
        let className = '';
        if (isCompleted) {
            className += 'completed';
        }
        return className;
    }

    toggleTodoCompleted() {
        this._actions.toggleTodoCompleted(this.props.todo);
    }

    render() {
        const todo = this.props.todo;
        return (
            <li className={this.getTodoClassName(todo.isCompleted)}>
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        onClick={this.toggleTodoCompleted}
                    />
                    <label>{todo.message}</label>
                    <button className="destroy" />
                </div>
                <input
                    className="edit"
                    value={todo.message}
                />
            </li>
        );
    }
}

TodoItem.propTypes = {
    todo: PropTypes.instanceOf(Todo)
};

TodoItem.defaultProps = {
    todo: new Todo
};

export default TodoItem;