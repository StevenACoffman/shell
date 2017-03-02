/*eslint react/no-danger: "off"*/

import React, {Component, PropTypes} from "react";
import {selectListItem, unselectListItem} from "../../actions";
import {connect} from "react-redux";

const MAX_TITLE_LENGTH = 57;

class CitationModalListItem extends Component {
    render() {
        const {listItemIndex, sectionId, listItem, dispatch, selectedListItems} = this.props;
        const selected = selectedListItems.includes(listItemIndex);
        let contributors = "";
        let citationLine = "";
        let title = "";
        if (listItem.author && listItem.title && listItem.citation_line) {
            contributors = listItem.author.join(", ");
            citationLine = listItem.citation_line;
            title = listItem.title[0];
        }

        if (title.length > MAX_TITLE_LENGTH){
            title = `${title.substring(0, MAX_TITLE_LENGTH)}...`;
        }
        return (
            <li>
                <div className="checkboxWrap mvm">
                    <label htmlFor={`section_${sectionId}_item_${listItemIndex}`}>
                        <input
                            className="mylists-single-option mvs"
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
                            }}/>
                        <span className="plm title lookslikeh2" dangerouslySetInnerHTML={{__html: title}}/>
                        <div className="mlxl pls">
                            <div className="contrib" dangerouslySetInnerHTML={{__html: contributors}}/>
                            <div className="src" dangerouslySetInnerHTML={{__html: citationLine}}/>
                        </div>
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
