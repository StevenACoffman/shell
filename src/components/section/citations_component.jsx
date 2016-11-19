import React, { PropTypes } from "react";
import { deleteCitation } from "../../actions";
import { connect } from "react-redux";

class Citations extends React.Component {
    render() {
        const { citationsId, citations, sectionId, dispatch } = this.props;
        const citationsFragment = citations.map((citation, index) => {
            return (
                <li
          key={`citation_${index}`}
          id={`section_${sectionId}_citation_${index}`}>
                    <div className="clearfix">
                        <p className="left">{citation}</p>
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
    citations: PropTypes.array.isRequired,
    citationsId: PropTypes.string.isRequired,
    sectionId: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired
};

Citations = connect()(Citations);

export default Citations;
