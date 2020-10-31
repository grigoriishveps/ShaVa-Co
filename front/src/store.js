import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
//import {reducer as reduxFormReducer} from 'redux-form';

import thunk from 'redux-thunk'
import {whoami} from "./actions/app";

const reducer = combineReducers({
  //form: reduxFormReducer, // mounted under "form",
  // app: appReducer,
  // users: usersReducer,
  // vehicles: vehiclesReducer,
  // driverSurvey: driverReducer,
  // depots: depotsReducer,
  // company: companyReducer,
  // tasks: tasksReducer,
  // infringements: infringementsReducer,
  // defects: defectsReducer,
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
