/*import { SET_HEADLINE_COUNTER } from '../actions/headline-actions';

export interface HeadlineState {
  headlineCounter:number;
}

const defaultState:HeadlineState = {
  headlineCounter:1,
};
// where you take action.type
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

export default headlineReducer;*/



import { SET_HEADLINE_NAME } from "../actions/headline-actions";

export interface HeadlineState {
  headlineName:string;
}

const defaultState:HeadlineState = {
  headlineName: 'My test name',
};

const headlineReducer = (state:HeadlineState = defaultState, action): HeadlineState => {
  switch(action.type) {
    case  SET_HEADLINE_NAME: {
      const {val} = action;
      return {
        ...state,
        headlineName: val,
      };
    }
    default:
      return state;
  }
}

export default headlineReducer;


