export const SET_HEADLINE_COUNTER = 'SET_HEADLINE_COUNTER';

export const setHeadlineCounter = (val:number) => ({
  type: SET_HEADLINE_COUNTER,
  val,
});

 // objects
// action is passed to reducer where it creates states
// state is in component than mapped to props
//            passed to component which dispatches it to props
// it connects it with headline view