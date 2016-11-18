import React, { Component, PropTypes } from 'react';
import { addCitations, clearSelectedListItems } from '../../actions';
import { connect } from 'react-redux';

class CitationsModalCtaComponent extends Component {
  constructor(props) {
    super(props);
    this.hideModal = this.hideModal.bind(this);
  }
  hideModal() {
    const { sectionId, selectedListItems, dispatch } = this.props;
    dispatch(addCitations(sectionId, selectedListItems));
    //$(`#sectionModal_${sectionId} input[type=checkbox]`).attr('checked', false);
    //$(`#sectionModal_${sectionId}`).foundation('reveal', 'close');
    dispatch(clearSelectedListItems(sectionId));
  }
  render() {
    return (
      <div>
        <button
          className="button button-jstor"
          onClick={this.hideModal}
          >
          Add to Section
        </button>
        <button
          className="btn-link"
          onClick={this.hideModal}
          >
          Cancel
        </button>
      </div>
    );
  }
}

CitationsModalCtaComponent.propTypes = {
  sectionId: PropTypes.number.isRequired,
  selectedListItems: PropTypes.array.isRequired,
  dispatch: React.PropTypes.func.isRequired
};

CitationsModalCtaComponent = connect()(CitationsModalCtaComponent);

export default CitationsModalCtaComponent;
