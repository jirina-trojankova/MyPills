import * as React from 'react';
import { render } from 'react-dom';
import MyComponent from './components/MyComponent/MyComponent'

interface AppProps {
  title: string;
 }

// const store = configureStore();
// configureMainServices(store);

const App = (props: AppProps) => (
    <div>
      <h1>{props.title}</h1>
      <MyComponent/>
      <br/>
    </div>
);


const renderApp = () => {
    render(<App title="React app."/>, document.getElementById('app'));
    };


renderApp();