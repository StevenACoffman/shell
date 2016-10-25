import React from 'react';

class Citations extends React.Component {
  render() {
    const {citationsId, citations, sectionId} = this.props;
    const citationsFragment = citations.map((citation, index) => {
      return <li key={`citation_${index}`} id={`section_${sectionId}_citation_${citation.id}`}>{citation.text}</li>;
    })
    return (
      <div>
        <span className="subheader">Citations</span>
        <ul id={citationsId}>
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
