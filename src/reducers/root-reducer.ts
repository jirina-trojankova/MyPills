import { combineReducers } from 'redux';
import { headlineReducer, HeadlineState } from './settings-reducer';

export interface RootState {
  headline: HeadlineState;
}

export const rootReducer = combineReducers({
  headline: headlineReducer,
});