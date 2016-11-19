import React, { Component, PropTypes } from "react";

export default class CitationFormatPicker extends Component {
    render() {
        const { id, value, onChange, options } = this.props;

        return (
            <span>
                <label htmlFor={id}>Citation Format:</label>
                <select id={id} onChange={e => onChange(e.target.value)}
                value={value}>
                    {options.map(option =>
                        <option value={option} key={option}>
                            {option.toUpperCase()}
                        </option>)
          }
                </select>
            </span>
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
