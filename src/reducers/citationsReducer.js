// jshint ignore: start
// above comment is because old jshint (2.8) does not understand default arguments until 2.91+

const citationsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CITATION':
      return [...state,{
        id: action.citationId,
        sectionId: action.sectionId,
        text: action.text
      }];
    default:
      return state
  }
}

export default citationsReducer;
