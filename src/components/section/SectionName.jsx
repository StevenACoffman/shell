import React, { Component, PropTypes } from "react";
import { modifySectionName } from "../../actions";
import { connect } from "react-redux";

class SectionName extends Component {
    render() {
        const { nameId, name, sectionId, dispatch }  = this.props;
        return (
            <div>
                <label htmlFor={nameId} >Section Name</label>
                <input
                  type="text"
                  id={nameId}
                  value={name}
                  onChange={event => {
                      dispatch(modifySectionName(sectionId, event.target.value));
                  }}
                />
            </div>
        );
    }
}

SectionName.propTypes = {
    name: PropTypes.string.isRequired,
    nameId: PropTypes.string.isRequired,
    sectionId: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired
};

SectionName = connect()(SectionName);

export default SectionName;
