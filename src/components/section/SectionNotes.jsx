// @flow
import React, { Component, PropTypes } from "react";
import { modifySectionNotes } from "../../actions";
import { connect } from "react-redux";

class SectionNotes extends Component {
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
    notes: PropTypes.string.isRequired,
    notesId: PropTypes.string.isRequired,
    sectionId: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired
};

SectionNotes = connect()(SectionNotes);

export default SectionNotes;
