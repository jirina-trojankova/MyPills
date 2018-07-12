import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Headline from './components/Headline/Headline';
import { configureStore } from './services/store';

interface AppProps {
  title: string;
}

const store = configureStore();

const App = (props: AppProps) => (
  <Provider store={store}>
    <div>
      <Headline />
      // where do you take the Headline?!
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