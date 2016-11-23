import React, { Component, PropTypes } from "react";
import { addCitations, clearSelectedListItems, toggleCitationModal } from "../../actions";
import { connect } from "react-redux";

class CitationsModalCta extends Component {
    constructor(props) {
        super(props);
        this.hideModal = this.hideModal.bind(this);
    }
    hideModal() {
        const { sectionId, selectedListItems, dispatch } = this.props;
        dispatch(addCitations(sectionId, selectedListItems));
        dispatch(toggleCitationModal(sectionId, false));
        dispatch(clearSelectedListItems(sectionId));
    }
    render() {
        return (
            <div>
                <button
                    className="button button-jstor"
                    onClick={this.hideModal}
                >
                    Add to Section
                </button>
                <button
                  className="btn-link"
                  onClick={this.hideModal}
                  >
                  Cancel
                </button>
            </div>
        );
    }
}

CitationsModalCta.propTypes = {
    sectionId: PropTypes.number.isRequired,
    selectedListItems: PropTypes.array.isRequired,
    dispatch: React.PropTypes.func.isRequired
};

CitationsModalCta = connect()(CitationsModalCta);

export default CitationsModalCta;
