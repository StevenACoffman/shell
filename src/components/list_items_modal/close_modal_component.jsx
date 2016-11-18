import React, { Component, PropTypes } from 'react';
import { clearSelectedListItems } from '../../actions';
import { connect } from 'react-redux';

class CloseModalComponent extends Component {
  constructor(props) {
    super(props);
    this.hideModal = this.hideModal.bind(this);
  }
  hideModal() {
    const { sectionId, dispatch } = this.props;
    //$(`#sectionModal_${sectionId} input[type=checkbox]`).attr('checked', false);
    //$(`#sectionModal_${sectionId}`).foundation('reveal', 'close');
    dispatch(clearSelectedListItems(sectionId));
  }
  render() {
    return (
      <a
        href=""
        className="close-reveal-modal"
        aria-label="Close Overlay"
        onClick={this.hideModal}
        >
        × <span className="visuallyhidden">Close Overlay</span>
      </a>
    );
  }
}

CloseModalComponent.propTypes = {
  sectionId: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
};

CloseModalComponent = connect()(CloseModalComponent);

export default CloseModalComponent;
