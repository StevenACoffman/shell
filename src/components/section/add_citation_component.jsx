import React from 'react';
import { changeThesis } from '../../actions';
import store from '../../containers/store';

class AddCitation extends React.Component {
  render() {
    return (
      <button className="button button-jstor" onClick={event => {
        store.dispatch(changeThesis(event.target.value));
      }}>+ Add Citation From List</button>
    );
  }
}

AddCitation.propTypes = {
  handleAddCitation: React.PropTypes.func.isRequired
};

AddCitation.defaultProps = {
  handleAddCitation: () => {}
};

export default AddCitation;
