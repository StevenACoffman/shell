import React from 'react';
import Thesis from '../components/thesis.jsx';
import Section from '../components/section/section_component.jsx';

export default class OutlineComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddCitation = this.handleAddCitation.bind(this);
        this.handleClick = this.handleClick.bind(this);
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

    render() {
      return (
        <div>
          <div className="lookslikeh1 maxl" onClick={this.handleClick}>
                  You have clicked this {this.state.num_clicks}
                  times!!
          </div>
          <Thesis/>
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
