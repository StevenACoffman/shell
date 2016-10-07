import React from 'react';
import Thesis from './thesis.jsx';

export default class OutlineComponent extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.handleThesisChange = this.handleThesisChange.bind(this);
        this.state = {
            num_clicks: 0,
            thesis_value: ''
        }
    }

    onClick() {
        this.setState({
            num_clicks: this.state.num_clicks + 1,
            thesis_value: ''
        });
    }

    handleThesisChange(e) {
      console.log(e.target.value);
      this.setState({
        num_clicks:this.state.num_clicks,
        thesis_value: e.target.value
      });
    }

    handleThesisKeyUp(e) {
      return;
    }

    render() {
      return (
        <div>
          <div className="lookslikeh1 maxl" onClick={this.onClick}>
                  You have clicked this {this.state.num_clicks}
                  times!!
          </div>
          <Thesis thesis_value={ this.state.thesis_value } handleChange={this.handleThesisChange} handleKeyUp={this.handleThesisKeyUp} />
        </div>

        );
    }
}
