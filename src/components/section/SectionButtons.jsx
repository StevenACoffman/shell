import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import { moveSectionUp, moveSectionDown } from "../../actions";
import DeleteSection from "./DeleteSection.jsx";
import Tooltip from "../shared/Tooltip.jsx";


class SectionButtons extends Component {
    render() {
        const { sectionId, canMoveSectionUp, canMoveSectionDown, dispatch } = this.props;

        return (
            <div className="row mtl">
              <div className="small-4 columns outline__tooltip">
                  <button
                    id={`move_section_up_button_${sectionId}`}
                    type="button"
                    className={classNames("outline-section__button outline-section__button--move-up", {
                      "secondary disabled": !canMoveSectionUp
                    })}
                    disabled={!canMoveSectionUp}
                    onClick={event => {
                      dispatch(moveSectionUp(sectionId));
                    }}
                  >
                  </button>
                <Tooltip tooltipMessage="Move section up"/>
                </div>
              <div className="small-4 columns outline__tooltip">
                <button
                  id={`move_section_down_button_${sectionId}`}
                  type="button"
                  className={classNames("outline-section__button outline-section__button--move-down", {
                    "secondary disabled": !canMoveSectionDown
                  })}
                  disabled={!canMoveSectionDown}
                  onClick={event => {
                    dispatch(moveSectionDown(sectionId));
                  }}
                >
                </button>
                <Tooltip tooltipMessage="Move section down"/>
              </div>
                <div className="small-4 columns outline__tooltip">
                  <DeleteSection sectionId={sectionId} deleteSectionId={`delete_section_${sectionId}`}/>
                  <Tooltip tooltipMessage="Delete section"/>
                </div>
            </div>
        );
    }
}

SectionButtons.propTypes = {
    sectionId: PropTypes.number.isRequired,
    canMoveSectionUp: PropTypes.bool.isRequired,
    canMoveSectionDown: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
};

SectionButtons = connect()(SectionButtons);

export default SectionButtons;
