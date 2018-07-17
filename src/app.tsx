import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { default as Headline } from './components/Headline/Headline';
import { configureStore } from './services/store';

const store = configureStore();

const App = (props) => (
  <Provider store={store}>
    <div>
      <Headline myProp={1} />
    </div>
  </Provider>
);


const renderApp = () => {
  render(<App title="React app."/>,
      document.getElementById('app'));
};

if ((module as any).hot) {
  (module as any).hot.accept();
}

renderApp();