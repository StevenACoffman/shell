import React from 'react';
import SectionName from './name_component.jsx';
import SectionNotes from './notes_component.jsx';
import Citations from './citations_component.jsx';
import SectionButtons from './buttons_component.jsx';
import AddCitation from './add_citation_component.jsx';

class SectionComponent extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="small-9 columns">
          <SectionName name={this.props.name} nameId={"name_" + this.props.id} />
          <SectionNotes notes={this.props.notes} notesId={"notes_" + this.props.id }/>
          <Citations citations={this.props.citations} citationsId={"citations_" + this.props.id} />
          <AddCitation handleAddCitation={this.props.handleAddCitation} />
        </div>
        <div className="small-3 columns">
          <SectionButtons
            moveSectionUpState={this.props.moveSectionUpIsEnabled}
            moveSectionDownState={this.props.moveSectionDownIsEnabled}
            deleteSectionState={this.props.deleteSectionIsEnabled}
            />
        </div>
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
