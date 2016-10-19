import React from 'react';
import store from '../../containers/store';


class SectionButtons extends React.Component {
  render() {
    console.log(store.getState());
    let moveSectionUpClass = !this.props.moveSectionUpIsEnabled ? 'secondary disabled' : '';
    let moveSectionDownClass = !this.props.moveSectionDownIsEnabled ? 'secondary disabled' : '';
    let deleteSectionClass = !this.props.deleteSectionIsEnabled ? 'secondary disabled' : '';
    return (
      <div className="mtxl action-buttons">
        <button
          type="button"
          className={`button button-jstor ${moveSectionUpClass}`}
          >
          Move Section Up
        </button>
        <button
          type="button"
          className={`button button-jstor ${moveSectionDownClass}`}
          >
          Move Section Down
        </button>
        <button
          type="button"
          className={`button button-jstor ${deleteSectionClass}`}
          >
          Delete Section
        </button>
      </div>
    )
  }
}

export default SectionButtons;


