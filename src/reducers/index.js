/*jshint esnext:true */

import { combineReducers } from 'redux';
import thesisReducer from './thesisReducer';
import sectionsReducer from './sectionsReducer';

// Combine Reducers
const reducers = combineReducers({
    thesisState: thesisReducer,
    sectionState: sectionsReducer
});

export default reducers;
