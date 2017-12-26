import React from "react";
import TodoFilter from "./TodoFilter";

class TodoFilters extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedLabel: 'All'
        };
        this.setFilterSelected = this.setFilterSelected.bind(this);
    }

    setFilterSelected(label) {
        this.setState({
            selectedLabel: label
        });
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