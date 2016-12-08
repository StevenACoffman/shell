/*jshint esnext:true */

import { combineReducers } from "redux";
import listReducer from "./listReducer";
import thesisReducer from "./thesisReducer";
import outlineReducer from "./outlineReducer";
import sectionsReducer from "./sectionsReducer";

// Combine Reducers
const reducers = combineReducers({
    list: listReducer,
    thesis: thesisReducer,
    sections: sectionsReducer,
    outlineState: outlineReducer
});

export default reducers;
