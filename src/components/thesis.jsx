import React from 'react';
import { connect } from 'react-redux';
import { changeThesis } from '../actions';
import store from '../containers/store';

class Thesis extends React.Component {
  render() {
    const {thesis_value} = this.props;
    return (
      <div id="thesis-component">
        <label htmlFor="thesis-body">Thesis Statement</label>
        <textarea
          type="text"
          rows="5"
          id="thesis-body"
          placeholder="Placeholder..."
          value={thesis_value}
          onChange={event => {
            store.dispatch(changeThesis(event.target.value));
          }}></textarea>
      </div>
    );
  }
}

Thesis.propTypes = {
  thesis_value: React.PropTypes.string
};

Thesis.defaultProps = {
  thesis_value: ''
};

const mapStateToProps = (store) => ({ thesis_value: store.thesisState.thesis_value });

Thesis = connect(mapStateToProps)(Thesis);
export default Thesis;
