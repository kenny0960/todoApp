import React from "react";
import PropTypes from "prop-types";
import Todo from "../classes/Todo";
import TodoActions from "../actions/TodoActions";

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this._actions = TodoActions;
        this.state = {
            editMessage: props.todo.message,
            isEditing: false
        };
        this.toggleTodoCompleted = this.toggleTodoCompleted.bind(this);
        this.destroyTodo = this.destroyTodo.bind(this);
        this.handleMessageDoubleClick = this.handleMessageDoubleClick.bind(this);
        this.handleEditInputChange = this.handleEditInputChange.bind(this);
    }

    getTodoClassName(isCompleted) {
        let className = '';
        if (isCompleted) {
            className += 'completed';
        }
        if (this.state.isEditing) {
            className += ' editing';
        }
        return className;
    }

    toggleTodoCompleted() {
        this._actions.toggleTodoCompleted(this.props.todo);
    }

    destroyTodo() {
        this._actions.destroyTodo(this.props.todo);
    }

    handleMessageDoubleClick() {
        this.setEditing(true);
    }

    handleEditInputChange(event) {
        const message = event.target.value;
        this.setEditMessage(message);
    }

    setEditing(isEditing) {
        this.setState({
            isEditing: isEditing
        });
    }

    setEditMessage(message) {
        this.setState({
            editMessage: message
        });
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
                    <label onDoubleClick={this.handleMessageDoubleClick}>
                        {todo.message}
                    </label>
                    <button
                        className="destroy"
                        onClick={this.destroyTodo}
                    />
                </div>
                <input
                    className="edit"
                    value={this.state.editMessage}
                    onChange={this.handleEditInputChange}
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