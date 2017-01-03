// @flow
import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import SectionComponent from "./section/SectionComponent.jsx";

class SectionList extends Component {
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
        citations: PropTypes.arrayOf(PropTypes.number).isRequired,
        canMoveSectionUp: PropTypes.bool.isRequired,
        canMoveSectionDown: PropTypes.bool.isRequired
    }).isRequired).isRequired
};

const mapStateToProps = (store) => ({ sections: store.sections, listItems: store.list.listItems });

SectionList = connect(mapStateToProps)(SectionList);

export default SectionList;
