
import { SET_INPUT_VALUE, SET_NEW_HEADLINE } from '../actions/headline-actions';

const defaultState = {
  headlineName: 'My test name',
  inputValue: '',
};



const headlineReducer = (state = defaultState, action) => {
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


