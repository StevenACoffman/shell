const sectionPotentialCitationReducer = (state = [], action) => {
    switch (action.type) {
    case "CLEAR_SELECTED_LIST_ITEMS":
        return [];
    case "SELECT_LIST_ITEM":
        return [...state, action.listItemIndex];
    case "UNSELECT_LIST_ITEM":
        return state.filter((listItemIndex) => (listItemIndex !== action.listItemIndex));
    case "SELECT_ALL_LIST_ITEMS":
        return action.listItems;
    default:
        return state;
    }
};

export default sectionPotentialCitationReducer;
