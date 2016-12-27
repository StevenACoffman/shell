import * as actionTypes from "../actions/actionTypes";

import citationsReducer from "./citationsReducer";
import sectionPotentialCitationReducer from "./sectionPotentialCitationReducer";

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
    case actionTypes.ADD_CITATIONS:
        return {...state,
            citations: citationsReducer(state.citations, action)
        };
    case actionTypes.DELETE_CITATION:
        return {...state,
            citations: citationsReducer(state.citations, action)
        };
    case actionTypes.MODIFY_SECTION_NAME:
        return {...state,
            name: action.name
        };
    case actionTypes.MODIFY_SECTION_NOTES:
        return {...state,
            notes: action.notes
        };
    case actionTypes.TOGGLE_CITATION_MODAL:
        return {...state,
            modalIsOpen: action.isOpen
        };
    case "TOGGLE_DELETE_SECTION_MODAL":        
        return {...state,
            deleteSectionModalIsOpen: action.isOpen
        };
    default:
        return {...state,
            selectedListItems: sectionPotentialCitationReducer(state.selectedListItems, action)
        };
    }
};

export default sectionReducer;
