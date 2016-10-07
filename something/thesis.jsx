import React from 'react';

class Thesis extends React.Component {
  render() {
    return (
      <div>
        <input type='text' onChange={this.props.handleChange} onKeyUp={this.props.handleKeyUp} value={this.props.thesis_value} />
      </div>
    );
  }
}

Thesis.propTypes = {
  handleChange: React.PropTypes.func.isRequired,
  handleKeyUp: React.PropTypes.func.isRequired,
  thesis_value: React.PropTypes.string
};

Thesis.defaultProps = {
  thesis_value: ''
};

export default Thesis;
