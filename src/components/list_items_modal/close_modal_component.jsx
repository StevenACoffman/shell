import React, { Component, PropTypes } from "react";
import { clearSelectedListItems, toggleCitationModal } from "../../actions";
import { connect } from "react-redux";

class CloseModalComponent extends Component {
    constructor(props) {
        super(props);
        this.hideModal = this.hideModal.bind(this);
    }
    hideModal() {
        const { sectionId, dispatch } = this.props;
        dispatch(toggleCitationModal(sectionId, false));
        dispatch(clearSelectedListItems(sectionId));
    }
    render() {
        return (
            <a
                className="close-reveal-modal"
                aria-label="Close Overlay"
                onClick={this.hideModal}
                style={{boxSizing:"border-box",
                    color:"#ffffff",
                    cursor:"pointer",
                    display:"block",
                    fontFamily:"arial, helvetica, clean, sans-serif",
                    fontSize:"32.5px",
                    fontStyle:"normal",
                    fontWeight:"bold",
                    height:"32px",
                    lineHeight:"32.5px",
                    position:"absolute",
                    right:"8.9375px",
                    textDecoration:"none",
                    textSizeAdjust:"100%",
                    top:"4.875px",
                    visibility:"visible",
                    width:"18.9844px"}}
                >
                × <span className="visuallyhidden" style={{position: "absolute",
                    overflow: "hidden",
                    overflowX: "hidden",
                    overflowY: "hidden",
                    clip: "rect(0 0 0 0)",
                    height: "1px",
                    width: "1px",
                    margin: "-1px",
                    padding: "0",
                    border: "0"}}>Close Overlay</span>
            </a>
        );
    }
}

CloseModalComponent.propTypes = {
    sectionId: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired
};

CloseModalComponent = connect()(CloseModalComponent);

export default CloseModalComponent;
