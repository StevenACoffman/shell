import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { fetchSaveAndThenDownload } from "../actions";

class DownloadOutline extends Component {
    render() {
        const { dispatch } = this.props;
        return (
            <button
            id="download-outline"
            type="button"
            className="button button-jstor"
            onClick={event => {
                dispatch(fetchSaveAndThenDownload());
            }}
            >
            Download
            </button>
    );
    }
}

DownloadOutline.propTypes = {
    dispatch: PropTypes.func.isRequired
};


export default connect()(DownloadOutline);
