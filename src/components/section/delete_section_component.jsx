import React from "react";
import { deleteSection } from "../../actions";
import { connect } from "react-redux";

class DeleteSection extends React.Component {
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
    sectionId: React.PropTypes.number.isRequired,
    deleteSectionId: React.PropTypes.string.isRequired,
    dispatch: React.PropTypes.func.isRequired
};

DeleteSection = connect()(DeleteSection);

export default DeleteSection;
