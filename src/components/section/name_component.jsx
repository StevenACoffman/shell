import React from 'react';

class Name extends React.Component {
  render() {
    return (
      <div>
        <label>Name:</label>
        <input
          type="text"
          defaultValue={this.props.name}
        />
      </div>
    );
  }
}

Name.propTypes = {
  name: React.PropTypes.string.isRequired
};

Name.defaultProps = {
  name: 'Default Name'
};

export default Name;