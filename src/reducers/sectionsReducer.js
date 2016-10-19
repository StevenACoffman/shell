import citationsReducer from './citationsReducer';

// jshint ignore: start
// above comment is because old jshint (2.8) does not understand default arguments until 2.91+

const sectionReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_CITATION':
      if (state.id !== action.sectionId) {
        return state
      }

      return Object.assign({}, state, {
        citations: citationsReducer(state.citations, action)
      });
    default:
      return state
  }
}

const defaultSectionFactory = (id) => ({
  id,
  name: '',
  notes: '',
  citations: []
});

const sectionsReducer = (state = [defaultSectionFactory(0)], action) => {
  switch (action.type) {
    case 'ADD_SECTION':
      return [
        ...state,
        defaultSectionFactory(action.id)
      ];
    case 'ADD_CITATION':
      return state.map(section =>
        sectionReducer(section, action)
      )
    default:
      return state;
  }
};

export default sectionsReducer;
