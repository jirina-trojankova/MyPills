import * as React from 'react';
import { render } from 'react-dom';
import MyComponent from './components/MyComponent/MyComponent'

// interface AppProps {
//   title: string;
// }

// const store = configureStore();
// configureMainServices(store);

const App = (props) => (
    <div>
      <h1>{props.title}</h1>
      <Main/>
      <br/>
    </div>
);


const renderApp = () => {
    render(<App title="React app."/>, document.getElementById('app'));
    };


// renderApp();