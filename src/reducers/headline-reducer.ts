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


import { SET_INPUT_VALUE, SET_NEW_HEADLINE } from "../actions/headline-actions";

export interface HeadlineState {
  headlineName:string;
  inputValue: string;
}

const defaultState:HeadlineState = {
  headlineName: 'My test name',
  inputValue: '',
};



const headlineReducer = (state:HeadlineState = defaultState, action): HeadlineState => {
  switch(action.type) {
    case  SET_INPUT_VALUE: {
      const {val} = action;
      return {
        ...state,
        inputValue: val,
      };
    }
    case SET_NEW_HEADLINE: {
      return {
        ...state,
        headlineName: state.inputValue,
      };
    }
    default:
      return state;
  }
};

export default headlineReducer;


