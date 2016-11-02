import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import SectionComponent from './section/section_component.jsx';

class SectionList extends React.Component {
  render() {
    const {sections} = this.props;
    return (
      <div>
        {sections && sections.map((section, index)=>
          <SectionComponent
            id={index}
            key={index}
            {...section}
          />
        )}
      </div>
    );
  }
}

SectionList.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    notes: React.PropTypes.string.isRequired,
    citations: React.PropTypes.array.isRequired
  }).isRequired).isRequired
};

const mapStateToProps = (store) => ({ sections: store.sectionState });

SectionList = connect(mapStateToProps)(SectionList);

export default SectionList;
