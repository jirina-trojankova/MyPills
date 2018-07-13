/*export const SET_HEADLINE_COUNTER = 'SET_HEADLINE_COUNTER';

export const setHeadlineCounter = (val:number) => ({
  type: SET_HEADLINE_COUNTER,
  val,
});*/

export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
export const SET_NEW_HEADLINE = 'SET_NEW_HEADLINE';


export const setInputValue =  (val: string) => ({
  type: SET_INPUT_VALUE,
  val,
});

export const setNewHeadline =  () => ({
  type: SET_NEW_HEADLINE,
});

