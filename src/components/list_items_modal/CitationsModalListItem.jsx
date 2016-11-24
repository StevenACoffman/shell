import React, { Component, PropTypes } from "react";
import { selectListItem, unselectListItem } from "../../actions";
import { connect } from "react-redux";

class CitationModalListItem extends Component {
    render() {
        const { listItemIndex, sectionId, listItem, dispatch, selectedListItems} = this.props;
        const selected = selectedListItems.includes(listItemIndex);
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
                          checked={selected}
                          onChange={event => {
                              if (selected) {
                                  dispatch(unselectListItem(sectionId, listItemIndex));
                              } else {
                                  dispatch(selectListItem(sectionId, listItemIndex));
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

CitationModalListItem.propTypes = {
    listItem: PropTypes.object.isRequired,
    listItemIndex: PropTypes.number.isRequired,
    selectedListItems: PropTypes.arrayOf(PropTypes.number).isRequired,
    sectionId: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired
};
const mapStateToProps = (store, ownProps) => ({
    selectedListItems: store.sections[ownProps.sectionId].selectedListItems || [],
    listItems: store.list.listItems || []
});
CitationModalListItem = connect(mapStateToProps)(CitationModalListItem);

export default CitationModalListItem;
