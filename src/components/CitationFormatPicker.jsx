import React, { Component, PropTypes } from "react";
import Dropdown from 'react-dropdown';


export default class CitationFormatPicker extends Component {
    render() {
        const { id, value, onChange, options } = this.props;
        const mappedOptions = options.map(option => {
          return {label: option.toUpperCase(), value: option}
        });

        return (
                <Dropdown
                    id={id}
                    onChange={selection => onChange(selection.value)}
                    value={value.toUpperCase()}
                    options={mappedOptions}
                  >
                </Dropdown>
        );
    }
}

CitationFormatPicker.propTypes = {
    id: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};
