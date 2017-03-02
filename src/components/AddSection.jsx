import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { addSection } from "./../actions";

class AddSection extends Component {
    render() {
        const { dispatch } = this.props;
        return (
            <button
                id="add-section"
                onClick={event => {
                    dispatch(addSection());
                }}
                >
                + Add Section
            </button>
        );
    }
}

AddSection.propTypes = {
    dispatch: PropTypes.func.isRequired
};

AddSection = connect()(AddSection);

export default AddSection;
