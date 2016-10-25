import React from 'react';
import classNames from 'classnames';
import { moveSectionUp, moveSectionDown } from '../../actions';
import DeleteSection from './delete_section.jsx';
import store from '../../containers/store';


class SectionButtons extends React.Component {
  render() {
    const {sectionId, canMoveSectionUp, canMoveSectionDown} = this.props;

    return (
      <div className="mtxl action-buttons">
        <button
          id={`move_section_up_button_${sectionId}`}
          type="button"
          className={classNames({
            'button button-jstor': true,
            'secondary disabled': !canMoveSectionUp
          })}
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
          className={classNames({
            'button button-jstor': true,
            'secondary disabled': !canMoveSectionDown
          })}
          disabled={!canMoveSectionDown}
          onClick={event => {
            store.dispatch(moveSectionDown(sectionId))
          }}
          >
          Move Section Down
        </button>
        <DeleteSection sectionId={sectionId} deleteSectionId={`delete_section_${sectionId}`}/>
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
