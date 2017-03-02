import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { fetchSaveAndThenDownload, makeCaptainsLogMessage } from "../actions";

class DownloadOutline extends Component {
    render() {
        const { dispatch, outlineId, userId } = this.props;
        return (
            <button
            id="download-outline"
            type="button"
            className="button button-jstor mrl"
            onClick={event => {
                dispatch(fetchSaveAndThenDownload());
            }}
            data-capn-logger={makeCaptainsLogMessage("download_outline", outlineId, userId)}
            >
            Download
            </button>
    );
    }
}

DownloadOutline.propTypes = {
    outlineId: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return {
        outlineId: state.list.listId,
        userId : state.userId
    };
};

export default connect(mapStateToProps)(DownloadOutline);
