import React from 'react';
import Thesis from './thesis.jsx';

export default class OutlineComponent extends React.Component {
    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
        this.state = {
            num_clicks: 0,
            thesis_value: ''
        }
        this.handleThesisChange = this.handleThesisChange.bind(this);
        this.handleThesisKeyUp = this.handleThesisKeyUp.bind(this);
    }

    onClick() {
        console.log('onClick called');
        this.setState({
            num_clicks: this.state.num_clicks + 1,
            thesis_value: ''
        });
    }

    handleThesisChange(e) {
      console.log('handleThesisChange called:'+event.target);
      console.log(e);
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
          <Thesis handleChange={this.handleThesisChange} handleKeyUp={this.handleThesisKeyUp} />
        </div>

        );
    }
}
