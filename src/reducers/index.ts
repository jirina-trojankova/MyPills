import { combineReducers } from 'redux';
import headlineReducer  from './headline-reducer';
import itemReducer from './item-reducer';

export default combineReducers({
  headline: headlineReducer,
  // item: itemReducer,
});