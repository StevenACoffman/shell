import React from 'react';

class Citations extends React.Component {
  render() {
    let citations = this.props.citations.map((citation, index) => {
      return <li key={"citation_" + index} id={`${citation.sectionId}_citation_${citation.id}`}>{citation.text}</li>;
    })
    return (
      <div>
        <span className="subheader">Citations</span>
        <ul id={this.props.citationsId}>
          {citations}
        </ul>
      </div>
    );
  }
}

Citations.propTypes = {
  citations: React.PropTypes.array.isRequired,
  citationsId: React.PropTypes.string.isRequired
};

export default Citations;
