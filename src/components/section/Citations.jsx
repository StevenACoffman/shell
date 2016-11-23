import React, { Component, PropTypes } from "react";
import { deleteCitation } from "../../actions";
import { connect } from "react-redux";

class Citations extends Component {
    render() {
        const { citations, sectionId, listItems, dispatch } = this.props;
        const citationsId = `citations_${sectionId}`;
        const citationsFragment = citations.map((citation, index) => {
            return (
                <li
                  key={`citation_${index}`}
                  id={`section_${sectionId}_citation_${index}`}>
                    <div className="clearfix">
                        <p className="left" dangerouslySetInnerHTML={{__html: listItems[citation].formattedCitation}} />
                        <button className="right btn-link" onClick={event => {
                            dispatch(deleteCitation(sectionId, index));
                        }}>remove</button>
                    </div>
                </li>
            );
        });
        return (
            <div>
                <span className="subheader">Citations</span>
                <ul className="list-jstor" id={citationsId}>
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
    dispatch: PropTypes.func.isRequired
};
const mapStateToProps = (store, ownProps) => ({
    listItems: store.list.listItems,
    citations: store.sections[ownProps.sectionId].citations || []
});

Citations = connect(mapStateToProps)(Citations);

export default Citations;