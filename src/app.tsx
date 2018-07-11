import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import MyComponent from './components/MyComponent/MyComponent';
import { configureStore } from './reducers/store';
import { configureMainServices } from './services/app-service';

interface AppProps {
  title: string;
}

//don't see what's this
const store = configureStore();
configureMainServices(store);

const App = (props: AppProps) => (
  <Provider store={store}>
    <div>
      <h1>{props.title}</h1>
      <br/>
      <MyComponent/>
    </div>
  </Provider>
);


const renderApp = () => {
  render(<App title="This is header from App"/>, document.getElementById('app'));
};

if ((module as any).hot) {
  (module as any).hot.accept();
}

renderApp();