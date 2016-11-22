import React from "react";
import { modifySectionName } from "../../actions";
import { connect } from "react-redux";

class SectionName extends React.Component {
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
    name: React.PropTypes.string.isRequired,
    nameId: React.PropTypes.string.isRequired,
    sectionId: React.PropTypes.number.isRequired,
    dispatch: React.PropTypes.func.isRequired
};

SectionName = connect()(SectionName);

export default SectionName;
