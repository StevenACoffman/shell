import React from 'react';

class AddCitation extends React.Component {
  render() {
    return (
      <a href="" onClick={this.props.handleAddCitation}>
        Add citation from list
      </a>
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