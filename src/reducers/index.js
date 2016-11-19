/*jshint esnext:true */

import { combineReducers } from 'redux';
import thesisReducer from './thesisReducer';
import sectionsReducer from './sectionsReducer';
import listReducer from './listReducer';

// Combine Reducers
const reducers = combineReducers({
    thesis: thesisReducer,
    sections: sectionsReducer,
    list: listReducer
});

export default reducers;
