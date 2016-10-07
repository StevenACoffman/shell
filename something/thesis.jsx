import React from 'react';

class Thesis extends React.Component {
  constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.props.handleChange(event);
  }
  render() {
    return (
      <div>
        <input type='text' onChange={this.handleChange} onKeyUp={this.props.handleKeyUp} value={this.props.thesis_value} />
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
