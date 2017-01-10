import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import { fetchSaveOutline, makeCaptainsLogMessage } from "../actions";

class SaveOutline extends Component {
    render() {
        const { dispatch, outlineStateIsPristine, outlineId, userId } = this.props;
        return (
            <button
                id="save-outline"
                type="button"
                disabled={outlineStateIsPristine}
                className={classNames("button button-jstor", {
                    "secondary disabled": outlineStateIsPristine
                })}
                onClick={event => {
                    dispatch(fetchSaveOutline());
                }}
                data-capn-logger={makeCaptainsLogMessage("save_outline", outlineId, userId)}
            >
          Save Outline
            </button>
    );
    }
}

SaveOutline.propTypes = {
    outlineStateIsPristine: PropTypes.bool.isRequired,
    outlineId: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return {
        outlineStateIsPristine: state.outlineState.isPristine,
        outlineId: state.list.listId,
        userId : state.userId
    };
};

export default connect(mapStateToProps)(SaveOutline);
