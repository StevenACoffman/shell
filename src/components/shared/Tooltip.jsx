import React, { Component, PropTypes } from "react";


class Tooltip extends Component {
  render() {
    const { tooltipMessage } = this.props;
    return (
      <span className="outline__tooltiptext">
        <div className="outline__tooltip-uparrow"></div>
        <div className="mtm">{tooltipMessage}</div>
      </span>
    );
  }
}

export default Tooltip;
