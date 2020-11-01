import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
//import {reducer as reduxFormReducer} from 'redux-form';

import thunk from 'redux-thunk'
import {whoami} from "./actions/app";
import appReducer from "./reducers/appReducer";

const reducer = combineReducers({

   app: appReducer,
});

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const middleware = [thunk];
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(...middleware),
));

store.dispatch(whoami())

export default store;
