// @flow
import { DIRTY_ACTIONS, OUTLINE_SAVED } from "../actions/actionTypes";

const outlineReducer = (state = { isPristine: true }, action) => {
    if (DIRTY_ACTIONS.includes(action.type) && state.isPristine) {
        return { isPristine: false };
    }

    switch (action.type) {
    case OUTLINE_SAVED:
        return { isPristine: true };    
    default:
        return state;
    }
};

export default outlineReducer;