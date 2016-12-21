import * as actionTypes from "../actions/actionTypes";
const thesisReducer = (state = {thesis_value:""}, action) => {
    switch (action.type) {
    case actionTypes.CHANGE_THESIS:
        return { thesis_value: action.text };
    default:
        return state;
    }
};

export default thesisReducer;
