import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { saveOutline } from "../actions";

class SaveOutline extends Component {
    render() {
        const { dispatch } = this.props;
        return (
            <button
        className="button button-jstor"
        id="save-outline"
        type="button"
        onClick={event => {
            dispatch(saveOutline());
        }}
        >
          Save Outline
            </button>
    );
    }
}

SaveOutline.propTypes = {
    dispatch: PropTypes.func.isRequired
};

export default connect()(SaveOutline);
