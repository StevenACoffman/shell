import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import classNames from "classnames";
import {makeCaptainsLogMessage} from "../actions";


class SaveOutline extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {outlineId, userId, outlineStateIsPristine} = this.props;
    const componentClasses = classNames(
      {
        'mhl': true,
        'mtl': true,
        'mbs': true,
        'blue-text': true
      });

    return (
      <div
        id="save-outline"
        aria-live="polite"
        className={componentClasses}
        data-capn-logger={makeCaptainsLogMessage("save_outline", outlineId, userId)}
      >
        {outlineStateIsPristine ? "All changes saved." : "Saving..."}
      </div>
    );
  }
}



SaveOutline.propTypes = {
  outlineStateIsPristine: PropTypes.bool.isRequired,
  outlineId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    outlineStateIsPristine: state.outlineState.isPristine,
    outlineId: state.list.listId,
    userId: state.userId
  };
};

export default connect(mapStateToProps)(SaveOutline);
