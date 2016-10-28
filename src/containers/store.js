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
//const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

export const configureStore = (preloadedState) => createStore(rootReducer, preloadedState, composeEnhancers(
    applyMiddleware(...middleware)
  ));

const store = configureStore(undefined);

export default store;
