import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import MyComponent from './components/MyComponent/MyComponent';
import { configureStore } from './reducers/store';
import { configureMainServices } from './services/app-service';
import Time from './components/Time/Time';
import { getSeconds } from './services/time-service';

interface AppProps {
  title: string;
}

const store = configureStore();
configureMainServices(store);

const App = (props: AppProps) => (
  <Provider store={store}>
    <div>
      <h1>{props.title}</h1>
      <br/>
      <MyComponent/>
      <Time current={getSeconds(Date.now())}/>
    </div>
  </Provider>
);


const renderApp = () => {
  render(<App title="React app."/>, document.getElementById('app'));
};

if ((module as any).hot) {
  (module as any).hot.accept();
}

renderApp();