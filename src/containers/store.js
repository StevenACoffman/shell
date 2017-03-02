/*eslint no-console: "off"*/
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { createEpicMiddleware } from "redux-observable";
import { rootEpic } from "../reducers/index";

import createLogger from "redux-logger";
import rootReducer from "../reducers/index";
import { getUserId, getOutLineInitialData } from "../initializers/index";
import { updateSections } from "../reducers/sectionsReducer";

const epicMiddleware = createEpicMiddleware(rootEpic);
const middleware = [thunkMiddleware, epicMiddleware];

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
} else {
    initialState = {userId};
}
    
const store = configureStore(initialState);

export default store;
