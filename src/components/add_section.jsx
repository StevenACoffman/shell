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
          console.log(`AddSection button clicked with sections.length:${this.props.sections.length}`);
          console.log(this.props.sections);
          store.dispatch(addSection(this.props.sections.length))
        }}
        >
        + Add Section
      </button>
    )
  }
}

const mapStateToProps = (store) => ({ sections: store.sectionState });

AddSection = connect(mapStateToProps)(AddSection);

export default AddSection;
