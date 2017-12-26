import React from "react";
import TodoFilter from "./TodoFilter";
import TodoActions from "../actions/TodoActions";
import TodoStore from "../store/TodoStore";
import { TodoFilterLabels } from "../constants/TodoFilterConstants";

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
                    label={TodoFilterLabels.ALL}
                    isSelected={this.state.selectedLabel === TodoFilterLabels.ALL}
                    onClick={this.setFilterSelected}
                />
                <span> </span>
                <TodoFilter
                    label={TodoFilterLabels.ACTIVE}
                    isSelected={this.state.selectedLabel === TodoFilterLabels.ACTIVE}
                    onClick={this.setFilterSelected}
                />
                <span> </span>
                <TodoFilter
                    label={TodoFilterLabels.COMPLETED}
                    isSelected={this.state.selectedLabel === TodoFilterLabels.COMPLETED}
                    onClick={this.setFilterSelected}
                />
            </ul>
        );
    }
}

export default TodoFilters;