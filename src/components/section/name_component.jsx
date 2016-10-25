import React from 'react';
import { modifySectionName } from '../../actions';
import store from '../../containers/store';

class SectionName extends React.Component {
  render() {
    const {nameId, name, sectionId}  = this.props;
    return (
      <div>
        <label htmlFor={nameId} >Section Name</label>
        <input
          type="text"
          id={nameId}
          value={name}
          defaultValue={name}
          onChange={event => {
            store.dispatch(modifySectionName(sectionId, event.target.value));
          }}
        />
      </div>
    );
  }
}

SectionName.propTypes = {
  name: React.PropTypes.string.isRequired,
  nameId: React.PropTypes.string.isRequired,
  sectionId: React.PropTypes.number.isRequired
};

export default SectionName;
