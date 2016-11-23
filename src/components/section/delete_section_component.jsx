import React, { Component, PropTypes } from "react";
import { deleteSection } from "../../actions";
import { connect } from "react-redux";

class DeleteSection extends Component {
    render() {
        const { sectionId, deleteSectionId, dispatch } = this.props;
        return (
            <button className="button button-jstor" id={deleteSectionId} onClick={event => {
                dispatch(deleteSection(sectionId));
            }}>Delete Section</button>
        );
    }
}

DeleteSection.propTypes = {
    sectionId: PropTypes.number.isRequired,
    deleteSectionId: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
};

DeleteSection = connect()(DeleteSection);

export default DeleteSection;
