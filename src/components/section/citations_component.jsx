import React from 'react';

class Citations extends React.Component {
  render() {
    let citations = this.props.citations.map((citation, index) => {
      return <li key={"citation_" + index}>{citation}</li>;
    })
    return (
      <div>
        <h3>Citations</h3>
        <ul>
          {citations}
        </ul>
      </div>
    );
  }
}

Citations.propTypes = {
  citations: React.PropTypes.array.isRequired
};

Citations.defaultProps = {
  citations: ['Citation 1', 'Citation 2', 'Citation 3']
};

export default Citations;