/*jshint esnext:true */

import { combineReducers } from 'redux';
import thesisReducer from './thesisReducer';

// Combine Reducers
const reducers = combineReducers({
    thesisState: thesisReducer
});

export default reducers;
