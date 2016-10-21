import React from 'react';
import { moveSectionUp, moveSectionDown } from '../../actions';
import store from '../../containers/store';


class SectionButtons extends React.Component {
  constructor() {
    super();
    this.getButtonClassName = this.getButtonClassName.bind(this);
  }

  getButtonClassName(isEnabled) {
    return `button button-jstor ${isEnabled ? '' : 'secondary disabled'}`;
  }

  render() {
    const {sectionId, canMoveSectionUp, canMoveSectionDown} = this.props;
    return (
      <div className="mtxl action-buttons">
        <button
          id={`move_section_up_button_${sectionId}`}
          type="button"
          className={this.getButtonClassName(canMoveSectionUp)}
          disabled={!canMoveSectionUp}
          onClick={event => {
            store.dispatch(moveSectionUp(sectionId))
          }}
          >
          Move Section Up
        </button>
        <button
          id={`move_section_down_button_${sectionId}`}          
          type="button"
          className={this.getButtonClassName(canMoveSectionDown)}
          disabled={!canMoveSectionDown}
          onClick={event => {
            store.dispatch(moveSectionDown(sectionId))
          }}
          >
          Move Section Down
        </button>
      </div>
    );
  }
}

SectionButtons.propTypes = {
  sectionId: React.PropTypes.number.isRequired,
  canMoveSectionUp: React.PropTypes.bool.isRequired,
  canMoveSectionDown: React.PropTypes.bool.isRequired
};

export default SectionButtons;


