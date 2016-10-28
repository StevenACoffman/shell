import React from 'react';
import { addCitation } from '../../actions';
import store from '../../containers/store';

class AddCitation extends React.Component {
  render() {
    const {sectionId} = this.props;
    return (
      <button className="btn-link" onClick={event => {
        store.dispatch(addCitation(sectionId, 'Such Citation'));
      }}>+ Add Citation From List</button>
    );
  }
}

AddCitation.propTypes = {
  sectionId: React.PropTypes.number.isRequired
};

export default AddCitation;
