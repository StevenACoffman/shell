import React from 'react';

class SectionNotes extends React.Component {
  render() {
    const {notesId, notes} = this.props;
    return (
      <div>
        <label htmlFor={notesId} >Section Notes</label>
        <textarea
          name="notes"
          id={notesId}
          rows="5"
          defaultValue={notes}
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
