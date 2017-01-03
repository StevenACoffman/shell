import * as actionTypes from "../actions/actionTypes";
const sectionPotentialCitationReducer = (state = [], action) => {
    switch (action.type) {
    case actionTypes.CLEAR_SELECTED_LIST_ITEMS:
        return [];
    case actionTypes.SELECT_LIST_ITEM:
        return [...state, action.listItemIndex];
    case actionTypes.UNSELECT_LIST_ITEM:
        return state.filter((listItemIndex) => (listItemIndex !== action.listItemIndex));
    case actionTypes.SELECT_ALL_LIST_ITEMS:
        return action.listItems;
    default:
        return state;
    }
};

export default sectionPotentialCitationReducer;