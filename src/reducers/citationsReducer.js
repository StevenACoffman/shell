// jshint ignore: start
// above comment is because old jshint (2.8) does not understand default arguments until 2.91

const citationsReducer = (state = [], action) => {
    switch (action.type) {
    case "ADD_CITATIONS":
        return [...state, ...action.citations];
    case "CLEAR_SELECTED_LIST_ITEMS":
        return [];
    case "DELETE_CITATION":
        return state.filter((citation, index) => (index !== action.citationIndex));
    case "ADD_LIST_ITEM":
        return [...state, action.listItemIndex];
    case "REMOVE_LIST_ITEM":
        return state.filter((listItem, index) => (index !== action.listItemIndex));
    default:
        return state;
    }
};

export default citationsReducer;
