/*eslint no-console: "off"*/
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";
import rootReducer from "../reducers/index";
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

const outlineInitialDataElement = document.getElementById("outline-initial-data");
let initialState;
if (outlineInitialDataElement && outlineInitialDataElement.textContent) {
    try {
        let initialData = JSON.parse(outlineInitialDataElement.textContent);
        if (initialData === null) {
            initialState = undefined;
        } else {
            initialState = {
                ...initialData,
                sections: updateSections(initialData.sections),
                thesis: {thesis_value: initialData.thesis}
            };
        }
    } catch (e) {
        console.error(e);
    }
}

const store = configureStore(initialState);

export default store;
