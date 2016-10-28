// jshint ignore: start
// above comment is because old jshint (2.8) does not understand default arguments until 2.91+

import citationsReducer from './citationsReducer';

const defaultSectionFactory = () => ({
    name: '',
    notes: '',
    citations: [],
    canMoveSectionUp: false,
    canMoveSectionDown: false
  });

const sectionReducer = (state = defaultSectionFactory(), action) => {
  switch (action.type) {
    case 'ADD_CITATION':
      return {...state,
        citations: citationsReducer(state.citations, action)
      };
    case 'DELETE_CITATION':
      return {...state,
        citations: citationsReducer(state.citations, action)
      };
    case 'MODIFY_SECTION_NAME':
      return {...state,
        name: action.name
      };
    case 'MODIFY_SECTION_NOTES':
      return {...state,
        notes: action.notes
      };
    default:
      return state
  }
}

export default sectionReducer;
