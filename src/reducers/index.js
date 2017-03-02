/*jshint esnext:true */

import { combineReducers } from "redux";
import listReducer from "./listReducer";
import thesisReducer from "./thesisReducer";
import outlineReducer from "./outlineReducer";
import sectionsReducer from "./sectionsReducer";

import { combineEpics } from "redux-observable";
import { autosaveEpic } from "../epics/index";

export const rootEpic = combineEpics(
  autosaveEpic
);

// Combine Reducers
const reducers = combineReducers({
    list: listReducer,
    thesis: thesisReducer,
    sections: sectionsReducer,
    outlineState: outlineReducer,
    userId: (state="", action) => state
});

export default reducers;

