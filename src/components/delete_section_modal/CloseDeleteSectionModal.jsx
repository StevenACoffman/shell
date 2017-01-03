// @flow
import React, { Component, PropTypes } from "react";

class CloseDeleteSectionModal extends Component { 
    render() {
        const { closeModal } = this.props;
        return (
            <a className="close-reveal-modal outline-modal-close-link"
                aria-label="Close Overlay"
                onClick={closeModal}
                >
                <span className="visuallyhidden">Close Overlay</span>
            </a>
        );
    }
}

CloseDeleteSectionModal.propTypes = {
    closeModal: PropTypes.func.isRequired
};

export default CloseDeleteSectionModal;
