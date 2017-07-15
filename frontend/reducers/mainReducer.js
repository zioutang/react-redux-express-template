import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import homeReducer from './homeReducer';

// import * as types from ‘../actions/types';

const mainReducer = combineReducers({
    homeReducer,
    routing: routing,
});

export default mainReducer;
// combineReducers({
//   ...reducers,
//   routing: routerReducer
// })
