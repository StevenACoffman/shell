import React from 'react';
import { connect } from 'react-redux';
import { changeThesis } from '../../actions';
import store from '../../containers/store';

class AddCitation extends React.Component {
  render() {
    return (
      <button class="button button-jstor" onClick={event => {
        store.dispatch(changeThesis(event.target.value));
      }}>+ Add Section</button>
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
