import React from 'react';
import { addCitation } from '../../actions';
import store from '../../containers/store';

class AddCitation extends React.Component {
  render() {
    const {sectionId, citations} = this.props;
    return (
      <button className="button button-jstor" onClick={event => {
        store.dispatch(addCitation(sectionId, citations.length, 'Such Citation #' + citations.length));
      }}>+ Add Citation From List</button>
    );
  }
}

AddCitation.propTypes = {
  citations: React.PropTypes.array.isRequired,
  sectionId: React.PropTypes.number.isRequired
};

export default AddCitation;
