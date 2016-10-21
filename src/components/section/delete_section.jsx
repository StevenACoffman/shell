import React from 'react';
import { deleteSection } from '../../actions';
import store from '../../containers/store';

class DeleteCitation extends React.Component {
  render() {
    const {sectionId, deleteSectionId} = this.props;
    return (
      <button className="button button-jstor" id={deleteSectionId} onClick={event => {
        store.dispatch(deleteSection(sectionId));
      }}>Delete Section</button>
    );
  }
}

DeleteCitation.propTypes = {
  sectionId: React.PropTypes.number.isRequired,
  deleteSectionId: React.PropTypes.string.isRequired
};

export default DeleteCitation;