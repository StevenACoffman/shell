import React, { Component, PropTypes } from "react";
import CitationsModal from "./../list_items_modal/CitationsModal.jsx";
import {connect} from "react-redux";
import {toggleCitationModal} from "../../actions";

class AddCitations extends Component {
    render() {
        const {sectionId, dispatch} = this.props;

        return (
            <div>
                <button
                    className="btn-link mhn phn"
                    id={`add_citations_section_${sectionId}`}
                    data-reveal-id={`sectionModal_${sectionId}`}
                    onClick={() => dispatch(toggleCitationModal(sectionId, true))}>
                    + Add Citation From List
                </button>
                <CitationsModal {...this.props} />
            </div>
        );
    }
}

AddCitations.propTypes = {
    sectionId: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired
};

AddCitations = connect()(AddCitations);

export default AddCitations;
