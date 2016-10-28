import React from 'react';
import { deleteCitation } from '../../actions';
import store from '../../containers/store';

class Citations extends React.Component {
  render() {
    const {citationsId, citations, sectionId} = this.props;
    const citationsFragment = citations.map((citation, index) => {
      return (
        <li
          key={`citation_${index}`}
          id={`section_${sectionId}_citation_${citation.id}`}>
          <div className="clearfix">
              <p className="left">{`${citation.text} #${index}`}</p>
              <button className="right btn-link" onClick={event => {
                store.dispatch(deleteCitation(sectionId, index))
              }}>remove</button>
          </div>
        </li>
      );
    })
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
  citations: React.PropTypes.array.isRequired,
  citationsId: React.PropTypes.string.isRequired,
  sectionId: React.PropTypes.number.isRequired
};

export default Citations;
