import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise'
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger'
import rootReducer from '../reducers/index'


const middleware = [thunkMiddleware];

if (process.env.NODE_ENV === `development`) {
  const createLogger = require(`redux-logger`);
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
let initialState = undefined;
if (outlineInitialDataElement && outlineInitialDataElement.textContent) {
  try{
    initialState = JSON.parse(outlineInitialDataElement.textContent);
    if (initialState === null){
      initialState = undefined
    }
  }catch(e){
      console.error(e);
  }
}

const store = configureStore(initialState);

export default store;
