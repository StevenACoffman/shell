/*eslint react/no-danger: "off"*/

import React, { Component, PropTypes } from "react";
import { deleteCitation } from "../../actions";
import { connect } from "react-redux";

class Citations extends Component {
    render() {
        const { citations, sectionId, listItems, citationStyle, dispatch } = this.props;
        const citationsId = `citations_${sectionId}`;
        const citationsFragment = citations.map((citation, index) => {
            let listItemFormattedCitation = "";
            let selectedlistItem;
            if(typeof citation === "number") {
                selectedlistItem = listItems[citation];
            } else {
                selectedlistItem = listItems[index];
            }
            if(selectedlistItem !== undefined){
                listItemFormattedCitation = selectedlistItem[citationStyle];
            }
            return (
                <li
                  key={`citation_${index}`}
                  id={`section_${sectionId}_citation_${index}`}>
                    <div className="row">
                        <p className="small-10 columns left" dangerouslySetInnerHTML={{__html: listItemFormattedCitation}} />
                        <button className="small-2 columns right btn-link mvn pvn" onClick={event => {
                            dispatch(deleteCitation(sectionId, index));
                        }}>remove</button>
                    </div>
                </li>
            );
        });
        return (
            <div>
                <span className="subheader visually-hidden">Citations</span>
                <ul className="list-jstor mbn" id={citationsId}>
                    {citationsFragment}
                </ul>
            </div>
        );
    }
}

Citations.propTypes = {
    citations: PropTypes.arrayOf(PropTypes.number).isRequired,
    listItems: PropTypes.array.isRequired,
    sectionId: PropTypes.number.isRequired,
    citationStyle: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (store, ownProps) => ({
    listItems: store.list.listItems,
    citationStyle: store.list.citationStyle || "mla",
    citations: store.sections[ownProps.sectionId].citations || []
});

Citations = connect(mapStateToProps)(Citations);

export default Citations;
