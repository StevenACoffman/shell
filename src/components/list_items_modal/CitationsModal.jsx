// @flow
import React, { Component, PropTypes } from "react";
import CitationsModalListItem from "./CitationsModalListItem.jsx";
import CitationsModalCta from "./CitationsModalCta.jsx";
import CloseCitationsModal from "./CloseCitationsModal.jsx";
import {connect} from "react-redux";
import {toggleCitationModal, selectAllListItems, clearSelectedListItems} from "../../actions";
import Modal from "react-modal";

class CitationsModal extends Component {
    constructor(props) {
        super(props);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    openModal() {
        const {sectionId, dispatch} = this.props;
        dispatch(toggleCitationModal(sectionId, true));
    }
    closeModal() {
        const {sectionId, dispatch} = this.props;
        dispatch(toggleCitationModal(sectionId, false));
    }
    render() {
        const {sectionId, selectedListItems, listItems, modalIsOpen, dispatch} = this.props;
        const allListItemIndexes = Array.from(Array(listItems.length).keys());

        return (
            <Modal isOpen={modalIsOpen} onRequestClose={this.closeModal}
                portalClassName="reveal open"
                className="outline-modal-content"
                overlayClassName="outline-modal-overlay"
                contentLabel="Select Citations To Add to Section"
                >
                <header className="outline-modal-header">
                    <h2 className="outline-modal-header-h2">Add Citations From List</h2>
                </header>
                <div className="reveal-body outline-modal-body">
                    <div>
                        <h2>Select Citations To Add</h2>
                        <hr/>
                        <input className="mylists-single-option" type="checkbox"
                            onChange={event => {
                                if (event.target.checked) {
                                    dispatch(selectAllListItems(sectionId, allListItemIndexes));
                                } else {
                                    dispatch(clearSelectedListItems(sectionId));
                                }
                            }}
                            />Title
                        <hr/>
                        <ul>
                            {listItems.map((listItem, index) => {
                                return (<CitationsModalListItem listItemIndex={index} sectionId={sectionId} listItem={listItem} key={`section_${sectionId}_list_item_${index}`}/>);
                            })}
                        </ul>
                        <CitationsModalCta sectionId={sectionId} selectedListItems={selectedListItems}/>
                    </div>

                </div>
                <div>
                    <CloseCitationsModal sectionId={sectionId}/>
                </div>
            </Modal>

        );
    }
}

CitationsModal.propTypes = {
    sectionId: PropTypes.number.isRequired,
    listItems: PropTypes.array.isRequired,
    selectedListItems: PropTypes.array.isRequired,
    modalIsOpen: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (store, ownProps) => ({
    modalIsOpen: store.sections[ownProps.sectionId].modalIsOpen || false,
    selectedListItems: store.sections[ownProps.sectionId].selectedListItems || [],
    listItems: store.list.listItems || []
});

CitationsModal = connect(mapStateToProps)(CitationsModal);
export default CitationsModal;
