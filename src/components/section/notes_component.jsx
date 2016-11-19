import React from "react";
import { modifySectionNotes } from "../../actions";
import { connect } from "react-redux";

class SectionNotes extends React.Component {
    render() {
        const { notesId, notes, sectionId, dispatch } = this.props;
        return (
            <div>
                <label htmlFor={notesId} >Section Notes</label>
                <textarea
          name="notes"
          id={notesId}
          rows="5"
          value={notes}
          onChange={event => {
              dispatch(modifySectionNotes(sectionId, event.target.value));
          }}
        />
            </div>
        );
    }
}

SectionNotes.propTypes = {
    notes: React.PropTypes.string.isRequired,
    notesId: React.PropTypes.string.isRequired,
    sectionId: React.PropTypes.number.isRequired,
    dispatch: React.PropTypes.func.isRequired
};

SectionNotes = connect()(SectionNotes);

export default SectionNotes;
