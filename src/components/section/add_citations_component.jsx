import React from "react";
//import ListItemsModalComponent from "./../list_items_modal/list_items_modal_component.jsx";
import ListItemComponent from "../list_items_modal/list_item_component.jsx";
import ListItemsModalCtaComponent from "../list_items_modal/list_items_modal_cta_component.jsx";
import CloseModalComponent from "../list_items_modal/close_modal_component.jsx";
import {connect} from "react-redux";
import {toggleCitationModal} from "../../actions";
import Modal from "react-modal";

class AddCitations extends React.Component {
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
        const {sectionId, selectedListItems, listItems, modalIsOpen} = this.props;

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
            <div>
                <button
                    className="btn-link"
                    id={`add_citations_section_${sectionId}`}
                    data-reveal-id={`sectionModal_${sectionId}`}
                    onClick={this.openModal}>
                    + Add Citation From List
                </button>
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
                            <input className="mylists-single-option" type="checkbox"/>Title
                            <hr/>
                            <ul>
                                {listItems.map((listItem, index) => {
                                    return (<ListItemComponent citationIndex={index} sectionId={sectionId} listItem={listItem} key={`section_${sectionId}_list_item_${index}`}/>);
                                })}
                            </ul>
                            <ListItemsModalCtaComponent sectionId={sectionId} selectedListItems={selectedListItems}/>
                        </div>

                    </div>
                    <div>
                        <CloseModalComponent sectionId={sectionId}/>
                    </div>
                </Modal>
            </div>
        );
    }
}

AddCitations.propTypes = {
    sectionId: React.PropTypes.number.isRequired,
    selectedListItems: React.PropTypes.array.isRequired,
    modalIsOpen: React.PropTypes.bool,
    dispatch: React.PropTypes.func.isRequired
};

AddCitations = connect()(AddCitations);

export default AddCitations;
