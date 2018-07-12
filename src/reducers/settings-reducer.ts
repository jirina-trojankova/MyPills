import { createReducer } from 'redux-create-reducer';
import { UPDATE_VIEW_TYPE, UpdateViewSizeAction } from '../actions/settings-actions';

export interface SettingsState {
  isMobile: boolean;
}

const defaultState: SettingsState = {
  isMobile: false,
};

export const settingsReducer = createReducer(defaultState, {
  [UPDATE_VIEW_TYPE](state: SettingsState, action: UpdateViewSizeAction): SettingsState {
    const { isMobile } = action;
    return {
      ...state,
      isMobile,
    };
  },
});