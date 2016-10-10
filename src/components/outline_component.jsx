import React from 'react';
import Thesis from './thesis.jsx';

import Section from './section/section_component.jsx';
export default class OutlineComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddCitation = this.handleAddCitation.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleThesisChange = this.handleThesisChange.bind(this);
        this.state = {
          name: "Name Here..",
          notes: "Notes Here..",
          citations: ['Citation 1', 'Citation 2', 'Citation 3'],
          num_clicks: 0,
          thesis_value: ''
        };
    }

    handleClick() {
      this.setState(Object.assign({}, this.state, { num_clicks: this.state.num_clicks + 1 }));
    }
	 handleAddCitation(event) {
		// Implement Add Citation Logic Here
		 event.preventDefault();
  }

    handleThesisChange(e) {
      console.log(e.target.value);
      this.setState(Object.assign({}, this.state, { thesis_value: e.target.value }));
    }

    handleThesisKeyUp(e) {
      return;
    }

    render() {
      return (
        <div>
          <div className="lookslikeh1 maxl" onClick={this.handleClick}>
                  You have clicked this {this.state.num_clicks}
                  times!!
          </div>
          <Thesis thesis_value={ this.state.thesis_value } handleChange={this.handleThesisChange} handleKeyUp={this.handleThesisKeyUp} />
          <Section
            name={this.state.name}
					  notes={this.state.notes}
					  citations={this.state.citations}
					  handleAddCitation={this.handleAddCitation}
          />
          <Section
            name={this.state.name}
            notes={this.state.notes}
            citations={this.state.citations}
            handleAddCitation={this.handleAddCitation}
          />
        </div>
        );
    }
}
