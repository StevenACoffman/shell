import React from 'react';

class SectionNotes extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor={this.props.notesId} >Section Notes</label>
        <textarea
          name="notes"
          id={this.props.notesId}
          rows="5"
          defaultValue={this.props.notes}
        />
      </div>    
    );
  }
}

SectionNotes.propTypes = {
  notes: React.PropTypes.string.isRequired,
  notesId: React.PropTypes.string.isRequired
};

SectionNotes.defaultProps = {
  notes: 'Default Notes'
};

export default SectionNotes;