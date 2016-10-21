import React from 'react';

class SectionName extends React.Component {
  render() {
    const {nameId, name}  = this.props;
    return (
      <div>
        <label htmlFor={nameId} >Section Name</label>
        <input
          type="text"
          id={nameId}
          defaultValue={name}
        />
      </div>
    );
  }
}

SectionName.propTypes = {
  name: React.PropTypes.string.isRequired,
  nameId: React.PropTypes.string.isRequired
};

export default SectionName;
