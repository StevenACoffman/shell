import React from 'react';
import ReactDOM from 'react-dom';

export default class Thesis extends React.Component {
  constructor() {
    super(...arguments);
    this.propTypes = {
      handleChange: React.PropTypes.func.isRequired,
      handleKeyUp: React.PropTypes.func.isRequired,
      thesis_value: React.PropTypes.string
    };
    this.defaultProps = {
      thesis_value: ''
    };
  }
  handleMessageClick(index) {
    const message = this.state.messages.get(index);
    this.setState({
      messages: this.state.messages.set(index, message.set('completed', !message.get('completed'))),
    });
  }
  render() {
    return (
      <div>
        <input type='text' onChange={this.props.handleChange} onKeyUp={this.props.handleKeyUp} value={this.state.message} />
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
