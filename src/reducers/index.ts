import { combineReducers } from 'redux';
import headlineReducer  from './headline-reducer';

export default combineReducers({
  headline: headlineReducer,
});