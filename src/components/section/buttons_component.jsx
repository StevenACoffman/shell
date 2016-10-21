import React from 'react';
import { moveSectionUp, moveSectionDown, deleteSection } from '../../actions';
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
    const {canMoveSectionUp, canMoveSectionDown, canDeleteSection, sectionIndex} = this.props;
    return (
      <div className="mtxl action-buttons">
        <button
          type="button"
          className={this.getButtonClassName(canMoveSectionUp)}
          disabled={!canMoveSectionUp}
          onClick={event => {
            store.dispatch(moveSectionUp(sectionIndex))
          }}
          >
          Move Section Up
        </button>
        <button
          type="button"
          className={this.getButtonClassName(canMoveSectionDown)}
          disabled={!canMoveSectionDown}
          onClick={event => {
            store.dispatch(moveSectionDown(sectionIndex))
          }}
          >
          Move Section Down
        </button>
        <button
          type="button"
          className={this.getButtonClassName(canDeleteSection)}
          disabled={!canDeleteSection}
          onClick={event => {
            store.dispatch(deleteSection(sectionIndex))
          }}
          >
          Delete Section
        </button>
      </div>
    );
  }
}

export default SectionButtons;


