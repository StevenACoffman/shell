import React from "react";
import ListItemsModalComponent from "./../list_items_modal/list_items_modal_component.jsx";
import { connect } from "react-redux";
import { toggleCitationModal } from "../../actions";

class AddCitations extends React.Component {
    render() {
        const { sectionId, selectedListItems, listItems, modalIsOpen, dispatch } = this.props;
        return (
            <div>
                <button
                      className="btn-link"
                      id={`add_citations_section_${sectionId}`}
                      data-reveal-id={`sectionModal_${sectionId}`}
                      onClick={event => {
                          dispatch(toggleCitationModal(sectionId, true));
                      }}
                      >
                    + Add Citation From List
                </button>
                <ListItemsModalComponent
                      sectionId={sectionId}
                      selectedListItems={selectedListItems}
                      listItems={listItems}
                      modalIsOpen={modalIsOpen}
                />
            </div>
        );
    }
}

AddCitations.propTypes = {
    sectionId: React.PropTypes.number.isRequired,
    selectedListItems: React.PropTypes.array.isRequired,
    modalIsOpen: React.PropTypes.bool,
    dispatch: React.PropTypes.func.isRequired
};

AddCitations = connect()(AddCitations);

export default AddCitations;
