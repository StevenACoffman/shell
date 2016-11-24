import React, { Component, PropTypes } from "react";
import classNames from "classnames";
import { moveSectionUp, moveSectionDown } from "../../actions";
import DeleteSection from "./DeleteSection.jsx";
import { connect } from "react-redux";


class SectionButtons extends Component {
    render() {
        const { sectionId, canMoveSectionUp, canMoveSectionDown, dispatch } = this.props;

        return (
            <div className="mtxl action-buttons">
                <div>
                    <button
                        id={`move_section_up_button_${sectionId}`}
                        type="button"
                        className={classNames("button button-jstor", {
                            "secondary disabled": !canMoveSectionUp
                        })}
                        disabled={!canMoveSectionUp}
                        onClick={event => {
                            dispatch(moveSectionUp(sectionId));
                        }}
                        >
                        Move Section Up
                    </button>
                </div>
                <div>
                    <button
                        id={`move_section_down_button_${sectionId}`}
                        type="button"
                        className={classNames("button button-jstor", {
                            "secondary disabled": !canMoveSectionDown
                        })}
                        disabled={!canMoveSectionDown}
                        onClick={event => {
                            dispatch(moveSectionDown(sectionId));
                        }}
                        >
                        Move Section Down
                    </button>
                </div>
                <DeleteSection sectionId={sectionId} deleteSectionId={`delete_section_${sectionId}`}/>
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
