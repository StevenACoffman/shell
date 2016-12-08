import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import { saveOutline } from "../actions";

class SaveOutline extends Component {
    render() {
        const { dispatch, outlineStateIsPristine } = this.props;
        return (
            <button
        className="button button-jstor"
        id="save-outline"
        type="button"
        disabled={outlineStateIsPristine}
        className={classNames("button button-jstor", {
            "secondary disabled": outlineStateIsPristine
        })}
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

const mapStateToProps = state => {
    return {
        outlineStateIsPristine: state.outlineState.isPristine
    };
};

export default connect(mapStateToProps)(SaveOutline);
