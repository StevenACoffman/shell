import React from 'react';

class SectionName extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor={this.props.nameId} >Section Name</label>
        <input
          type="text"
          id={this.props.nameId}
          defaultValue={this.props.name}
        />
      </div>
    );
  }
}

SectionName.propTypes = {
  name: React.PropTypes.string.isRequired,
  nameId: React.PropTypes.string.isRequired
};

SectionName.defaultProps = {
  name: 'Default Name'
};

export default SectionName;