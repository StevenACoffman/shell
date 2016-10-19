import React from 'react';
import { connect } from 'react-redux';
import store from './../containers/store';
import { addSection } from './../actions';

class AddSection extends React.Component {
  render() {
    return (
      <button
        className="button button-jstor"
        id="add-section"
        type="button"
        onClick={event => {
          store.dispatch(addSection(this.props.sections.length))
        }}
        >
        + Add Section
      </button>
    )
  }
}

const mapStateToProps = function (store) {
  return {
    sections: store.sectionState
  };
}

AddSection = connect(mapStateToProps)(AddSection);

export default AddSection;
