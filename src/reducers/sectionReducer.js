// jshint ignore: start
// above comment is because old jshint (2.8) does not understand default arguments until 2.91+

import citationsReducer from "./citationsReducer";

const defaultSectionFactory = () => ({
    name: "",
    notes: "",
    citations: [],
    selectedListItems: [],
    canMoveSectionUp: false,
    canMoveSectionDown: false
});

const sectionReducer = (state = defaultSectionFactory(), action) => {
    switch (action.type) {
    case "ADD_CITATIONS":
        return {...state,
            citations: citationsReducer(state.citations, action)
        };
    case "CLEAR_SELECTED_LIST_ITEMS":
        return {...state,
            selectedListItems: citationsReducer(state.selectedListItems, action)
        };
    case "DELETE_CITATION":
        return {...state,
            citations: citationsReducer(state.citations, action)
        };
    case "ADD_LIST_ITEM":
        return {...state,
            selectedListItems: citationsReducer(state.selectedListItems, action)
        };
    case "REMOVE_LIST_ITEM":
        return {...state,
            selectedListItems: citationsReducer(state.selectedListItems, action)
        };
    case "MODIFY_SECTION_NAME":
        return {...state,
            name: action.name
        };
    case "MODIFY_SECTION_NOTES":
        return {...state,
            notes: action.notes
        };
    case "TOGGLE_CITATION_MODAL":
        return {...state,
            modal: action.isOpen
        };
    default:
        return state;
    }
};

export default sectionReducer;
