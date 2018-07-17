import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer  from '../reducers/index';

export const configureStore = (initialState = null) => {
  const enhancer = applyMiddleware(thunkMiddleware);
  const store = !initialState ? createStore(rootReducer, enhancer) :
    createStore(rootReducer, initialState, enhancer);

  if ((module as any).hot) {
    (module as any).hot.accept('../reducers/index', () => {
      const nextReducer = require('../reducers/index').rootReducer;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};
