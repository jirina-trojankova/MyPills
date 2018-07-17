import { SET_ITEM_VALUE} from '../actions/item-actions';


 const defaultInput = {
   input: '',
 };

const itemReducer = (state = defaultInput, action ) => {
  switch (action.type) {
    case SET_ITEM_VALUE: {
      return {
        ...state,
        input: state,
      };
    }
    default:
      return state;
  }
};

export default itemReducer;