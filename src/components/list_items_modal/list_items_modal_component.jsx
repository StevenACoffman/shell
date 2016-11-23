import React, { Component, PropTypes } from "react";
import ListItemComponent from "./list_item_component.jsx";
import ListItemsModalCtaComponent from "./list_items_modal_cta_component.jsx";
import CloseModalComponent from "./close_modal_component.jsx";
import classNames from "classnames";



class ListItemsModalComponent extends Component {


    render() {
        const { sectionId, listItems, selectedListItems, modalIsOpen} = this.props;

        const modalOpenStyle={display: "block", opacity: 1, visibility: "visible", top: -881, position: "fixed"};
        const modalClosedStyle= {display: "none", opacity: 1, visibility: "hidden", top: 568};
        let modalStyle = modalIsOpen ? modalOpenStyle : modalClosedStyle;
        let tabIndex = modalIsOpen ? "0" : "";

        return (
            <div className="row">
                <div className="small-12">
                    <section className="pl-section">
                        <div id={`sectionModal_${sectionId}`}
                            className={classNames("reveal-modal", {
                                "open": modalIsOpen
                            })}
                            aria-hidden={!modalIsOpen}
                            style={modalStyle}
                            tabIndex={tabIndex}
                            data-reveal>
                            <header>
                                <h2>Add Citations From List</h2>
                            </header>
                            <div className="reveal-body">
                                <div>
                                    <h2>Select Citations To Add</h2>
                                    <hr />
                                    <input className="mylists-single-option" type="checkbox"/>Title
                                    <hr />
                                    <ul>
                                        {listItems.map((listItem, index) => {
                                            return (
                                                <ListItemComponent
                                                  citationIndex={index}
                                                  sectionId={sectionId}
                                                  listItem={listItem}
                                                  key={`section_${sectionId}_list_item_${index}`}
                                                  selectedListItems={selectedListItems}
                                                  />
                                            );
                                        })}
                                    </ul>
                                    <ListItemsModalCtaComponent sectionId={sectionId} selectedListItems={selectedListItems} />
                                </div>
                                <CloseModalComponent sectionId={sectionId} />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

ListItemsModalComponent.propTypes = {
    sectionId: PropTypes.number.isRequired,
    listItems: PropTypes.array.isRequired,
    selectedListItems: PropTypes.array.isRequired,
    modalIsOpen: PropTypes.bool
};

ListItemsModalComponent.defaultProps = {
    modalIsOpen: false
};

export default ListItemsModalComponent;
