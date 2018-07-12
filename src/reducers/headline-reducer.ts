import { SET_HEADLINE_COUNTER } from '../actions/headline-actions';

export interface HeadlineState {
  headlineCounter:number;
}

const defaultState:HeadlineState = {
  headlineCounter:1,
};

const headlineReducer = (state:HeadlineState = defaultState, action):HeadlineState => {
  switch(action.type) {
    case SET_HEADLINE_COUNTER: {
      const {val} = action;
      return {
        ...state,
        headlineCounter: val,
      };
    }
    default:
      return state;
  }
};

export default headlineReducer;

// reducer has that function that chooses the state, which is passed to component