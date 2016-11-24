import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { changeCitationFormat, fetchCitationFormatIfNeeded } from "../actions";
import CitationFormatPicker from "../components/CitationFormatPicker.jsx";

class CitationFormat extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(nextCitationStyle) {
        const { dispatch, listItems} = this.props;
        dispatch(changeCitationFormat(nextCitationStyle));
        listItems.map(listItem => dispatch(fetchCitationFormatIfNeeded(listItem,nextCitationStyle)));
    }

    render() {
        const { citationStyle, listItems } = this.props;
        const listItemsFragment = listItems.map((listItem, index) => {
            return (
                <li key={listItem.doi} >{`${listItem.doi} <em>${citationStyle}:</em>${listItem[citationStyle]}`}</li>
            );
        });
        return (
            <div>
                <CitationFormatPicker id="citation-format-picker"
                    value={citationStyle}
                    onChange={this.handleChange}
                    options={[ "mla", "apa", "chicago"]} />
                <ul className="list-jstor hide">
                    {listItemsFragment}
                </ul>
            </div>
        );
    }
}

CitationFormat.propTypes = {
    citationStyle: PropTypes.string.isRequired,
    listItems: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    const { citationStyle, listItems } = state.list;
    return {
        citationStyle,
        listItems
    };
};

export default connect(mapStateToProps)(CitationFormat);
