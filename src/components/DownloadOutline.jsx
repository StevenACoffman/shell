import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { downloadOutline } from "../actions";

class DownloadOutline extends Component {
    render() {
        const { dispatch, outlineId } = this.props;
        return (
            <button
            id="download-outline"
            type="button"
            className="button button-jstor"
            onClick={event => {
                const link = document.createElement("a");
                link.href = `/myjstor/outline/${outlineId}/download`;
                //check for HTML5 download attribute support
                if (link.download !== undefined) {
                //Set HTML5 download attribute. This will prevent file from opening if supported.
                    link.download = "outline.txt";
                }
                document.body.appendChild(link); 
                dispatch(downloadOutline(outlineId));
                //Dispatching (not redux) click event.
                if (document.createEvent) {
                    const e = document.createEvent("MouseEvents");
                    e.initEvent("click", true, true);
                    link.dispatchEvent(e);
                    document.body.removeChild(link);
                    return true;
                }
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
