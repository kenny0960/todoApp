import React from "react";
import PropTypes from "prop-types";
import Todo from "../classes/Todo";

class TodoItem extends React.Component {
    render() {
        const todo = this.props.todo;
        return (
            <li>
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
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