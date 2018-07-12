// import { createReducer } from 'redux-create-reducer';
// import { UPDATE_VIEW_TYPE, UpdateViewSizeAction } from '../actions/settings-actions';
// import { getSeconds } from '../services/time-service';

// export interface TimeState {
//   time: number;
// }

// const defaultState: TimeState = {
//   time: Date.now(),
// };

// export const timeReducer = createReducer(defaultState, {});

// /**
//  * Extract time from state
//  * @param {TimeState} state
//  * @returns {number} time in seconds
//  */
// export const getTime = (state: TimeState): number => {
//   return getSeconds(state.time);
// };
