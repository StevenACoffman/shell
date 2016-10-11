import React from 'react';
import { connect } from 'react-redux';
import { changeThesis } from '../actions';
import store from '../containers/store';

class Thesis extends React.Component {

  render() {
    return (
      <div>
        <input type='text' onChange={event => {
          store.dispatch(changeThesis(event.target.value));
        }} value={this.props.thesis_value} />
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

const mapStateToProps = function(store) {
  console.log("mapStateToProps called");
  console.log(store);
  return {
    thesis_value: store.thesisState.thesis_value
  };
}

Thesis = connect(mapStateToProps)(Thesis);
export default Thesis;
