import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { saveAndThenDownload } from "../actions";

class DownloadOutline extends Component {
    render() {
        const { dispatch } = this.props;
        return (
            <button
            id="download-outline"
            type="button"
            className="button button-jstor"
            onClick={event => {
                dispatch(saveAndThenDownload());
            }}
            >
            Download
            </button>
    );
    }
}

DownloadOutline.propTypes = {
    outlineId: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return {
        outlineId: state.list.listId
    };
};

export default connect(mapStateToProps)(DownloadOutline);
