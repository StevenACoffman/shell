import React, { Component, PropTypes } from "react";
import { addListItem, removeListItem } from "../../actions";
import { connect } from "react-redux";

class ListItemComponent extends Component {
    render() {
        const { listItemIndex, sectionId, listItem, dispatch, selectedListItems} = this.props;
        let contributors = "";
        let citationLine = "";
        let title = "";
        if(listItem.formattedCitation === undefined) {
            title = "Loading Formatted Citation";
        } else {
            title = listItem.formattedCitation;
        }
        if (listItem.author && listItem.citation_line) {
            contributors = listItem.author.join(", ");
            citationLine = listItem.citation_line;
        }

        return (
            <li>
                <div className="checkboxWrap mll">
                    <label htmlFor={`section_${sectionId}_item_${listItemIndex}`}>
                        <input
                          className="mylists-single-option"
                          id={`section_${sectionId}_item_${listItemIndex}`}
                          type="checkbox"
                          value={title}
                          onChange={event => {
                              if (event.target.checked) {
                                  dispatch(addListItem(sectionId, listItem.formattedCitation, listItemIndex));
                              } else {
                                  dispatch(removeListItem(sectionId, listItemIndex));
                              }
                          }} />
                        <span className="pls title lookslikeh2">{title}</span>
                        <div className="contrib">{contributors}</div>
                        <div className="src">{citationLine}</div>
                    </label>
                </div>
            </li>
        );
    }
}

ListItemComponent.propTypes = {
    listItem: PropTypes.object.isRequired,
    listItemIndex: PropTypes.number.isRequired,
    sectionId: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired
};

ListItemComponent = connect()(ListItemComponent);

export default ListItemComponent;
