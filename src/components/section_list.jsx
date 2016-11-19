import React, { PropTypes } from "react";
import { connect } from "react-redux";
import SectionComponent from "./section/section_component.jsx";

class SectionList extends React.Component {
    render() {
        const { sections, listItems } = this.props;
        return (
            <div>
                {sections && sections.map((section, index)=>
                    <SectionComponent
            id={index}
            key={index}
            listItems={listItems}
            {...section}
          />
        )}
            </div>
        );
    }
}

SectionList.propTypes = {
    listItems: PropTypes.array.isRequired,
    sections: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        notes: PropTypes.string.isRequired,
        citations: PropTypes.array.isRequired,
        canMoveSectionUp: PropTypes.bool.isRequired,
        canMoveSectionDown: PropTypes.bool.isRequired,
        selectedListItems: PropTypes.array.isRequired
    }).isRequired).isRequired
};

const mapStateToProps = (store) => ({ sections: store.sections, listItems: store.list.listItems });

SectionList = connect(mapStateToProps)(SectionList);

export default SectionList;
