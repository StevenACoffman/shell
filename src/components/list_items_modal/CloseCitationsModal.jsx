// @flow
import React, { Component, PropTypes } from "react";
import { clearSelectedListItems, toggleCitationModal } from "../../actions";
import { connect } from "react-redux";

class CloseCitationsModal extends Component {
    constructor(props) {
        super(props);
        this.hideModal = this.hideModal.bind(this);
    }
    hideModal() {
        const { sectionId, dispatch } = this.props;
        dispatch(toggleCitationModal(sectionId, false));
        dispatch(clearSelectedListItems(sectionId));
    }
    render() {
        return (
            <a className="close-reveal-modal outline-modal-close-link"
                aria-label="Close Overlay"
                onClick={this.hideModal}
                >
                × <span className="visuallyhidden">Close Overlay</span>
            </a>
        );
    }
}

CloseCitationsModal.propTypes = {
    sectionId: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired
};

CloseCitationsModal = connect()(CloseCitationsModal);

export default CloseCitationsModal;
