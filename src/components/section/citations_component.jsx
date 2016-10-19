import React from 'react';

class Citations extends React.Component {
  render() {
    let citations = this.props.citations.map((citation, index) => {
      return <li key={"citation_" + index}>{citation}</li>;
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