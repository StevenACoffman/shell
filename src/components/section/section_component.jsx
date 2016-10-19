import React from 'react';
import SectionName from './name_component.jsx';
import SectionNotes from './notes_component.jsx';
import Citations from './citations_component.jsx';
import AddCitation from './add_citation_component.jsx';

class SectionComponent extends React.Component {
  render() {
    let {id, name, notes, citations} = this.props;
    return (
      <div>
        <SectionName name={name} nameId={`name_${id}`} />
        <SectionNotes notes={notes} notesId={`notes_${id}`}/>
        <Citations citations={citations} citationsId={`citations_${id}`} />
        <AddCitation sectionId={id} citations={citations} />
      </div>
    );
  }
}

SectionComponent.propTypes = {
  name: React.PropTypes.string.isRequired,
  notes: React.PropTypes.string.isRequired,
  citations: React.PropTypes.array.isRequired,
  id: React.PropTypes.number.isRequired
};

SectionComponent.defaultProps = {
  name: 'Default Name',
  notes: 'Default Notes',
  citations: ['Citation 1', 'Citation 2', 'Citation 3']
};

export default SectionComponent;
