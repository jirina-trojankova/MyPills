import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { default as Headline } from './components/Headline/Headline';
import { configureStore } from './services/store';
import ItemsView from './views/ItemView/ItemsView';
import ItemView from './views/ItemView/ItemView';

const store = configureStore();
const dummyItem = {
  name: 'Aspirin',
};

const dummyItemArray = [
  {name: 'Aspirin'},
  {name: 'Panadol'},
  {name: 'Ibuprofen'},
];

const App = (props) => (
  <Provider store={store}>
    <div>
      <Headline myProp={1} />
      <ItemsView items={dummyItemArray}></ItemsView>
      <ItemView item={dummyItem} />

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