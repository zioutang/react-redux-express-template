import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
// import rootReducer from './index';
import courseReducer from './coursesReducer';
// import indexReducer from './indexReducer';
// import contentReducer from './contentReducer';
// import * as types from '../actions/types';

const mainReducer = combineReducers({
      routing: routing,
      list: courseReducer,
      // name: index,
      // index: indexReducer,
      // content: contentReducer
});

export default mainReducer;
