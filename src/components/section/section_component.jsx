import React from 'react';
import Name from './name_component.jsx';
import Notes from './notes_component.jsx';
import Citations from './citations_component.jsx';
import AddCitation from './add_citation_component.jsx';

class Section extends React.Component {
  render() {
    return (
      <div>
        <Name name={this.props.name} />
        <Notes notes={this.props.notes} />
        <Citations citations={this.props.citations}/>
        <AddCitation handleAddCitation={this.props.handleAddCitation} />
      </div>
    );
  }
}

Section.propTypes = {
  name: React.PropTypes.string.isRequired,
  notes: React.PropTypes.string.isRequired,
  citations: React.PropTypes.array.isRequired,
  handleAddCitation: React.PropTypes.func.isRequired
};

Section.defaultProps = {
  name: 'Default Name',
  notes: 'Default Notes',
  citations: ['Citation 1', 'Citation 2', 'Citation 3'],
  handleAddCitation: () => {}
};

export default Section;