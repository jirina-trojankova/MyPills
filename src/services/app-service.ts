import * as matchMedia from 'matchmediaquery';
import { Store } from 'redux';
import { updateViewSizeAction } from '../actions/settings-actions';
import * as styleVariables from '../styles/_variables.scss';

const runViewportSizeWatcher = (store: Store) => {
  const fallbackMediaQueryValue = { width: 1024 };
  const mediaQueries = matchMedia(`(max-width: ${styleVariables.mobileMaxWidth})`, fallbackMediaQueryValue);
  store.dispatch(updateViewSizeAction(mediaQueries.matches));
  mediaQueries.addListener(({ matches: isMobile }) => {
    store.dispatch(updateViewSizeAction(isMobile));
  });
};

export const configureMainServices = (store: Store) => {
  runViewportSizeWatcher(store);
};