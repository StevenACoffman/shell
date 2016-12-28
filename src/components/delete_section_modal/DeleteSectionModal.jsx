import React, { Component, PropTypes } from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import DeleteSectionModalCta from "./DeleteSectionModalCta.jsx";
import CloseDeleteSectionModal from "./CloseDeleteSectionModal.jsx";
import {deleteSection, toggleDeleteSectionModal} from "../../actions";

class DeleteSectionModal extends Component {
    constructor(props) {
        super(props);
        this.closeModal = this.closeModal.bind(this);
        this.deleteSection = this.deleteSection.bind(this);
    }
    closeModal() {
        const {sectionId, dispatch} = this.props;
        dispatch(toggleDeleteSectionModal(sectionId, false));
    }
    deleteSection() {
        const {sectionId, dispatch} = this.props;
        dispatch(deleteSection(sectionId));
    }
    render() {
        const {sectionId, sectionName, deleteSectionModalIsOpen, dispatch} = this.props;
        return (
            <Modal isOpen={deleteSectionModalIsOpen} onRequestClose={this.closeModal}
                portalClassName="reveal open"
                className="outline-modal-content"
                overlayClassName="outline-modal-overlay"
                contentLabel="Delete Section"
                >
                <header className="outline-modal-header">
                    <h2 className="outline-modal-header-h2">Delete Section</h2>
                </header>
                <div className="reveal-body outline-modal-body">
                    <div>
                        <h2>Are you sure you want to delete this section?</h2>
                        {sectionName && 
                        <div>
                            <hr />
                            <p>{sectionName}</p>
                        </div>    
                        }    
                        <DeleteSectionModalCta sectionId={sectionId} deleteSection={this.deleteSection} closeModal={this.closeModal} />
                    </div>
                </div>
                <div>
                    <CloseDeleteSectionModal sectionId={sectionId} closeModal={this.closeModal} />
                </div>
            </Modal>
        );
    }
}

DeleteSectionModal.propTypes = {
    sectionId: PropTypes.number.isRequired,
    sectionName: PropTypes.string.isRequired,
    deleteSectionModalIsOpen: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (store, ownProps) => ({
    deleteSectionModalIsOpen: store.sections[ownProps.sectionId].deleteSectionModalIsOpen || false,
    sectionName: store.sections[ownProps.sectionId].name
});

DeleteSectionModal = connect(mapStateToProps)(DeleteSectionModal);
export default DeleteSectionModal;
