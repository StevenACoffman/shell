import * as actionTypes from "../actions/actionTypes";
const citationsReducer = (state = [], action) => {
    switch (action.type) {
    case actionTypes.ADD_CITATIONS:
        return [...state, ...action.citations];
    case actionTypes.CLEAR_SELECTED_LIST_ITEMS:
        return [];
    case actionTypes.DELETE_CITATION:
        return state.filter((citation, index) => (index !== action.citationIndex));
    default:
        return state;
    }
};

export default citationsReducer;
