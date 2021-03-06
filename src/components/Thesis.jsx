import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { changeThesis } from "../actions";

class Thesis extends Component {
    render() {
        const { thesis_value, dispatch } = this.props;
        return (
            <div id="thesis-component">
                <label className="bold" htmlFor="thesis-body">Thesis Statement</label>
                <textarea
                  type="text"
                  rows="5"
                  id="thesis-body"
                  placeholder="Placeholder..."
                  value={thesis_value}
                  onChange={event => {
                      dispatch(changeThesis(event.target.value));
                  }} />
            </div>
        );
    }
}

Thesis.propTypes = {
    thesis_value:PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (store) => ({ thesis_value: store.thesis.thesis_value || "" });

Thesis = connect(mapStateToProps)(Thesis);
export default Thesis;
