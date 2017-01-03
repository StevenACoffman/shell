/*eslint no-console: "off"*/
// @flow
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";
import rootReducer from "../reducers/index";
import { getUserId, getOutLineInitialData } from "../initializers/index";
import { updateSections } from "../reducers/sectionsReducer";

const middleware = [thunkMiddleware];

if (process.env.NODE_ENV === "development") {
    const loggerMiddleware = createLogger();
    middleware.push(loggerMiddleware);
}

/* eslint-disable no-underscore-dangle */

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

export const configureStore = (preloadedState) => createStore(rootReducer, preloadedState, composeEnhancers(
    applyMiddleware(...middleware)
));

let initialState;
const initialData = getOutLineInitialData();
const userId = getUserId();
if (initialData !== null) {
    initialState = { 
        ...initialData,
        sections: updateSections(initialData.sections),
        thesis: {thesis_value: initialData.thesis},
        userId
    };
}
    
const store = configureStore(initialState);

export default store;
