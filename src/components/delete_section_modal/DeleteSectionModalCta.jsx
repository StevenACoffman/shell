import React, { Component, PropTypes } from "react";

class DeleteSectionModalCta extends Component {
    render() {
        const {sectionId, deleteSection, closeModal} = this.props;
        return (
            <div>
                <button
                    id={`section_${sectionId}_confirm_delete_button`}
                    className="button button-jstor"
                    onClick={deleteSection}
                >
                   Confirm Delete
                </button>
                <button
                  id={`section_${sectionId}_cancel_delete_button`}
                  className="btn-link"
                  onClick={closeModal}
                  >
                  Cancel
                </button>
            </div>
        );
    }
}

DeleteSectionModalCta.propTypes = {
    sectionId: PropTypes.number.isRequired,
    closeModal: PropTypes.func.isRequired,
    deleteSection: PropTypes.func.isRequired
};

export default DeleteSectionModalCta;