import React from 'react';
import SectionName from './name_component.jsx';
import SectionNotes from './notes_component.jsx';
import Citations from './citations_component.jsx';
import AddCitation from './add_citation_component.jsx';

class SectionComponent extends React.Component {
  render() {
    return (
      <div>
        <SectionName name={this.props.name} nameId={"name_" + this.props.id} />
        <SectionNotes notes={this.props.notes} notesId={"notes_" + this.props.id }/>
        <Citations citations={this.props.citations} citationsId={"citations_" + this.props.id} />
        <AddCitation handleAddCitation={this.props.handleAddCitation} />
      </div>
    );
  }
}

SectionComponent.propTypes = {
  name: React.PropTypes.string.isRequired,
  notes: React.PropTypes.string.isRequired,
  citations: React.PropTypes.array.isRequired,
  id: React.PropTypes.string.isRequired
};

SectionComponent.defaultProps = {
  name: 'Default Name',
  notes: 'Default Notes',
  citations: ['Citation 1', 'Citation 2', 'Citation 3']
};

export default SectionComponent;