import React from "react";
import PropTypes from "prop-types";

class TodoFilter extends React.Component {
    constructor() {
        super();
        this.handleFilterClick = this.handleFilterClick.bind(this);
    }

    getClassName() {
        let className = '';
        if (this.props.isSelected) {
            className = 'selected';
        }
        return className;
    }

    handleFilterClick() {
        if (this.props.onClick === null) {
            return;
        }
        this.props.onClick(this.props.label);
    }

    render() {
        return (
            <li onClick={this.handleFilterClick}>
                <a href='#' className={this.getClassName()}>
                    {this.props.label}
                </a>
            </li>
        );
    }
}

TodoFilter.propTypes = {
    label: PropTypes.string,
    isSelected: PropTypes.bool,
    onClick: PropTypes.func
};

TodoFilter.defaultProps = {
    label: '',
    isSelected: false,
    onClick: null
};

export default TodoFilter;