// jshint ignore: start
// above comment is because old jshint (2.8) does not understand default arguments until 2.91+

const defaultSectionFactory = (id) => ({
  id: 'section_' + id,
  name: '',
  notes: '',
  citations: ['Citation 1']
});

const sectionReducer = (state = [defaultSectionFactory(0)], action) => {
  switch (action.type) {
    case 'ADD_SECTION':
      return [
        ...state,
        defaultSectionFactory(action.id)
      ];
    default:
      return state;
  }
};

export default sectionReducer;
