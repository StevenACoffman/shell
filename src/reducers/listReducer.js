import * as actionTypes from "../actions/actionTypes";
const listItemReducer = (state, action) => {
    switch (action.type) {
    case actionTypes.CHANGE_CITATION_FORMAT:
        return {
            ...state,
            formattedCitation: state[action.citationStyle]
        };
    case actionTypes.RECEIVE_CITATION_FORMAT:
        return {
            ...state,
            isFetching: false,
            [action.citationStyle]: action.formattedCitation,
            formattedCitation: action.formattedCitation
        };
    case actionTypes.REQUEST_CITATION_FORMAT:
        return {
            ...state,
            isFetching: true
        };
    default:
        return state;
    }
};

const defaultMyList = [];

const listReducer = (state = {
    citationStyle: "mla",
    listItems: defaultMyList
}, action) => {
    switch (action.type) {
    case actionTypes.CHANGE_CITATION_FORMAT:
        return {
            ...state,
            listItems: state.listItems.map((listItem, index) => {
                    return listItemReducer(listItem, action);
            }),
            citationStyle: action.citationStyle
        };
    case actionTypes.REQUEST_LIST_ITEMS: {
        return {...state, listId: action.listId};
    }
    case actionTypes.RECEIVE_LIST_ITEMS: {
        const loadingCitationFormatMessages = {
            "mla": "Loading Formatted Citation",
            "apa": "Loading Formatted Citation",
            "chicago": "Loading Formatted Citation"};
        let newItems = action.items.map(listItem => ({...loadingCitationFormatMessages, ...listItem, }));
        return {...state, listItems: newItems};
    }
    default:
        return {
            ...state,
            listItems: state.listItems.map((listItem, index) => {
                if (action.doi === listItem.doi) {
                    return listItemReducer(listItem, action);
                }
                return listItem;
            })
        };
    }
};

export default listReducer;
