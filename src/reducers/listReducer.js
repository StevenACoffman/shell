// jshint ignore: start
// above comment is because old jshint (2.8) does not understand default arguments until 2.91+

const listItemReducer = (state, action) => {
    switch (action.type) {
    case "RECEIVE_CITATION_FORMAT":
        return {
            ...state,
            isFetching: false,
            [action.citationStyle]: action.text,
            formattedCitation: action.text
        };
    case "REQUEST_CITATION_FORMAT":
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
    case "CHANGE_CITATION_FORMAT":
        return {
            ...state,
            citationStyle: action.citationStyle
        };
    case "REQUEST_LIST_ITEMS": {
        return {...state, listId: action.listId};
    }
    case "FETCH_LIST_ITEMS": {
        const loadingCitationFormatMessages = {
            "mla": "Loading Formatted Citation",
            "apa": "Loading Formatted Citation",
            "chicago": "Loading Formatted Citation"};
        let newItems = action.items.map(listItem => ({...listItem, ...loadingCitationFormatMessages}));
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
