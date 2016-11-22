import React, { Component, PropTypes } from "react";
import ListItemComponent from "./list_item_component.jsx";
import ListItemsModalCtaComponent from "./list_items_modal_cta_component.jsx";
import CloseModalComponent from "./close_modal_component.jsx";


class ListItemsModalComponent extends Component {
    render() {
        const { sectionId, listItems, selectedListItems } = this.props;
        return (
            <div className="row">
                <div className="small-12">
                    <section className="pl-section">
                        <div id={`sectionModal_${sectionId}`} className="reveal-modal" data-reveal>
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
    selectedListItems: PropTypes.array.isRequired
};

export default ListItemsModalComponent;
