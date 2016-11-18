import React from 'react';
import ListItemsModalComponent from './../list_items_modal/list_items_modal_component.jsx';

class AddCitations extends React.Component {
  render() {
    const { sectionId, selectedListItems, listItems } = this.props;
    return (
      <div>
        <button
          className="btn-link"
          id={`add_citations_section_${sectionId}`}
          data-reveal-id={`sectionModal_${sectionId}`}
          >
        + Add Citation From List
        </button>
        <ListItemsModalComponent
          sectionId={sectionId}
          selectedListItems={selectedListItems}
          listItems={listItems}
          />
      </div>
    );
  }
}

AddCitations.propTypes = {
  sectionId: React.PropTypes.number.isRequired,
  selectedListItems: React.PropTypes.array.isRequired
};

export default AddCitations;
