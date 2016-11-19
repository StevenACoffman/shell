// jshint ignore: start
// above comment is because old jshint (2.8) does not understand default arguments until 2.91+

const thesisReducer = (state = {thesis_value:''}, action) => {
    switch (action.type) {
    case 'CHANGE_THESIS':
        return { thesis_value: action.text };
    default:
        return state;
    }
};

export default thesisReducer;
