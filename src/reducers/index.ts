import { combineReducers } from 'redux';
import headlineReducer, { HeadlineState } from './headline-reducer';

export interface RootState {
headline: HeadlineState;
}

export default combineReducers({
  headline: headlineReducer,
});