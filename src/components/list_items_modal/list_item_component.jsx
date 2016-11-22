import React, { Component, PropTypes } from "react";
import { addListItem, removeListItem } from "../../actions";
import { connect } from "react-redux";

class ListItemComponent extends Component {
    render() {
        const { citationIndex, sectionId, listItem, dispatch } = this.props;
        let contributors = "";
        let citationLine = "";
        let title = "";
        if (listItem.author && listItem.title && listItem.citation_line) {
            contributors = listItem.author.join(", ");
            citationLine = listItem.citation_line;
            title = listItem.title[0];
        }
        return (
            <li>
                <div className="checkboxWrap mll">
                    <label htmlFor={`section_${sectionId}_item_${citationIndex}`}>
                        <input
                          className="mylists-single-option"
                          id={`section_${sectionId}_item_${citationIndex}`}
                          type="checkbox"
                          value={title}
                          onChange={event => {
                              if (event.target.checked) {
                                  dispatch(addListItem(sectionId, event.target.value));
                              } else {
                                  dispatch(removeListItem(sectionId, citationIndex));
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
    citationIndex: PropTypes.number.isRequired,
    sectionId: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired
};

ListItemComponent = connect()(ListItemComponent);

export default ListItemComponent;
