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
        this.handleEditInputKeyDown = this.handleEditInputKeyDown.bind(this);
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

    handleEditInputKeyDown(event) {
        switch (event.key) {
            case 'Enter':
                const message = this.state.editMessage;
                const todo = this.props.todo;
                todo.message = message;
                if (message === '') {
                    this._actions.destroyTodo(todo);
                    return;
                }
                this._actions.updateTodo(todo);
                this.setEditing(false);
                break;

            case 'Escape':
                this.setEditMessage(this.props.todo.message);
                this.setEditing(false);
                break;

            default:
                return;
        }
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

    getEditInput() {
        if (this.state.isEditing) {
            return <input
                ref="editInput"
                className="edit"
                value={this.state.editMessage}
                onChange={this.handleEditInputChange}
                onKeyDown={this.handleEditInputKeyDown}
                autoFocus
            />;
        }
        return null;
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
                {this.getEditInput()}
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