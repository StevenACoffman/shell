import React, { Component, PropTypes } from "react";
import ListItemsModalComponent from "./../list_items_modal/list_items_modal_component.jsx";
import {connect} from "react-redux";
import {toggleCitationModal} from "../../actions";

class AddCitations extends Component {
    render() {
        const {sectionId, dispatch} = this.props;

        return (
            <div>
                <button
                    className="btn-link"
                    id={`add_citations_section_${sectionId}`}
                    data-reveal-id={`sectionModal_${sectionId}`}
                    onClick={() => dispatch(toggleCitationModal(sectionId, true))}>
                    + Add Citation From List
                </button>
                <ListItemsModalComponent {...this.props} />

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
