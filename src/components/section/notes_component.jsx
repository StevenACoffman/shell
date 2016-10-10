import React from 'react';

class Notes extends React.Component {
  render() {
    return (
      <div>
        <textarea
          name="notes"
          rows="5"
          defaultValue={this.props.notes}
        />
      </div>    
    );
  }
}

Notes.propTypes = {
  notes: React.PropTypes.string.isRequired
};

Notes.defaultProps = {
  notes: 'Default Notes'
};

export default Notes;