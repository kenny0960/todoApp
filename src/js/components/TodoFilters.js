import React from "react";
import TodoFilter from "./TodoFilter";
import TodoActions from "../actions/TodoActions";
import TodoStore from "../store/TodoStore";

class TodoFilters extends React.Component {
    constructor() {
        super();
        this._store = TodoStore;
        this._actions = TodoActions;
        this.state = this.getStateFromStore();
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.setFilterSelected = this.setFilterSelected.bind(this);
    }

    getStateFromStore() {
        return {
            selectedLabel: this._store.getSelectedFilterLabel()
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

    setFilterSelected(label) {
        this._actions.setSelectedFilterLabel(label);
    }

    render() {
        return (
            <ul className="filters">
                <TodoFilter
                    label='All'
                    isSelected={this.state.selectedLabel === 'All'}
                    onClick={this.setFilterSelected}
                />
                <span> </span>
                <TodoFilter
                    label='Active'
                    isSelected={this.state.selectedLabel === 'Active'}
                    onClick={this.setFilterSelected}
                />
                <span> </span>
                <TodoFilter
                    label='Completed'
                    isSelected={this.state.selectedLabel === 'Completed'}
                    onClick={this.setFilterSelected}
                />
            </ul>
        );
    }
}

export default TodoFilters;