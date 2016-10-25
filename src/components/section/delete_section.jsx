import React from 'react';
import { deleteSection } from '../../actions';
import store from '../../containers/store';

class DeleteSection extends React.Component {
  render() {
    const {sectionId, deleteSectionId} = this.props;
    return (
      <button className="button button-jstor" id={deleteSectionId} onClick={event => {
        store.dispatch(deleteSection(sectionId));
      }}>Delete Section</button>
    );
  }
}

DeleteSection.propTypes = {
  sectionId: React.PropTypes.number.isRequired,
  deleteSectionId: React.PropTypes.string.isRequired
};

export default DeleteSection;
