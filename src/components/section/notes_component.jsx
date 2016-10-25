import React from 'react';
import { modifySectionNotes } from '../../actions';
import store from '../../containers/store';

class SectionNotes extends React.Component {
  render() {
    const {notesId, notes, sectionId} = this.props;
    return (
      <div>
        <label htmlFor={notesId} >Section Notes</label>
        <textarea
          name="notes"
          id={notesId}
          rows="5"
          value={notes}
          onChange={event => {
            store.dispatch(modifySectionNotes(sectionId, event.target.value));
          }}
        />
      </div>
    );
  }
}

SectionNotes.propTypes = {
  notes: React.PropTypes.string.isRequired,
  notesId: React.PropTypes.string.isRequired,
  sectionId: React.PropTypes.number.isRequired
};

SectionNotes.defaultProps = {
  notes: 'Default Notes'
};

export default SectionNotes;
