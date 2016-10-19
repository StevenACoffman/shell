/*jshint esnext:true */

import { combineReducers } from 'redux';
import thesisReducer from './thesisReducer';
import sectionReducer from './sectionReducer';

// Combine Reducers
const reducers = combineReducers({
    thesisState: thesisReducer,
    sectionState: sectionReducer
});

export default reducers;
