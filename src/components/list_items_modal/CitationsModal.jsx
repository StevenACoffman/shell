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
        const customStyle = {
            content: {
                border: "solid 5px #546d89",
                borderRadius: "4px",
                bottom: "auto",
                display: "flex",
                flexDirection: "column",
                minHeight: "10rem",
                left: "50%",
                padding: "0",
                position: "fixed",
                right: "auto",
                top: "50%",
                transform: "translate(-50%,-50%)",
                minWidth: "20rem",
                width: "90%",
                height: "90%",
                maxWidth: "60rem",
                boxShadow: "0 0 10px rgba(0,0,0,0.4)",
                background: "#546d89",
                overflow: "hidden",
                outline: "none"
            },
            overlay: {
                position: "fixed",
                top: "0",
                left: "0",
                zIndex: 1,
                overflow: "hidden"
            }
        };
        const headerStyle = {
            backgroundColor: "#546d89",
            padding: "10px",
            minHeight: "40px"
        };
        let styleElement = document.getElementById("Style__ReactModal__Body--open");
        if (styleElement == null) {
            styleElement = document.createElement("style");
            styleElement.id = "Style__ReactModal__Body--open";
            styleElement.type = "text/css";
            styleElement.innerHTML = ".ReactModal__Body--open { overflow: hidden; }";
            document.getElementsByTagName("head")[0].appendChild(styleElement);
        }
        return (
            <Modal isOpen={modalIsOpen} onRequestClose={this.closeModal} style={customStyle}>
                <header style={headerStyle}>
                    <h2 style={{
                        color: "#fff",
                        margin: 0,
                        fontSize: "16px"
                    }}>Add Citations From List</h2>
                </header>
                <div className="reveal-body" style={{
                    "background": "white",
                    margin: "0",
                    padding: "10px",
                    overflowY: "auto",
                    minHeight: "0px"
                }}>
                    <div>
                        <h2 style={{
                            fontSize: "16px"
                        }}>Select Citations To Add</h2>
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
