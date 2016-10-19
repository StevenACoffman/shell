import React from 'react';
import { addCitation } from '../../actions';
import store from '../../containers/store';

class AddCitation extends React.Component {
  render() {
    return (
      <button className="button button-jstor" onClick={event => {
        store.dispatch(addCitation(this.props.sectionId, this.props.citations.length, 'Such Citation #' + this.props.citations.length));
      }}>+ Add Citation From List</button>
    );
  }
}

AddCitation.propTypes = {
  citations: React.PropTypes.array.isRequired,
  sectionId: React.PropTypes.string.isRequired
};

export default AddCitation;
