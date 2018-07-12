import { applyMiddleware, createStore, Store } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { rootReducer, RootState } from './root-reducer';

export const configureStore = (initialState?: RootState): Store => {
  const enhancer = applyMiddleware(thunkMiddleware);
  const store = !initialState ? createStore(rootReducer, enhancer) :
    createStore(rootReducer, initialState, enhancer);

  if ((module as any).hot) {
    (module as any).hot.accept('../reducers/root-reducer', () => {
      const nextReducer = require('../reducers/root-reducer').rootReducer;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};