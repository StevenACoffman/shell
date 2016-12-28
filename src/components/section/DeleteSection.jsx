import React, { Component, PropTypes } from "react";
import DeleteSectionModal from "./../delete_section_modal/DeleteSectionModal.jsx";
import { toggleDeleteSectionModal } from "../../actions";
import { connect } from "react-redux";

class DeleteSection extends Component {
    render() {
        const { sectionId, deleteSectionId, dispatch } = this.props;
        return (
            <div>
                <button className="button button-jstor" id={deleteSectionId} onClick={event => {
                    dispatch(toggleDeleteSectionModal(sectionId, true));
                }}>Delete Section</button>
                <DeleteSectionModal {...this.props} />
            </div>    
        );
    }
}

DeleteSection.propTypes = {
    sectionId: PropTypes.number.isRequired,
    deleteSectionId: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
};

DeleteSection = connect()(DeleteSection);

export default DeleteSection;
