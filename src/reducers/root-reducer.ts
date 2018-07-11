import { combineReducers } from 'redux';
import { settingsReducer, SettingsState } from './settings-reducer';
import { timeReducer, TimeState } from './time-reducer';

export interface RootState {
  settings: SettingsState;
  time: TimeState;
}

export const rootReducer = combineReducers({
  settings: settingsReducer,
  time: timeReducer,
});