import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { default as Headline } from './components/Headline/Headline';
import * as style from './main-style.scss';
import { configureStore } from './services/store';
import UrlConfig from './url_config';
import HeaderView from './views/HeadlineView/HeaderView';
import ItemsView from './views/ItemsView/ItemsView';
import ItemView from './views/ItemView/ItemView';

const store = configureStore();
const dummyItem = {
  name: 'Aspirin',
};

// name is unique
const dummyItemArray = [
  {name: 'Aspirin'},
  {name: 'Panadol'},
  {name: 'Ibuprofen'},
];

const App = (props) => (
  <Provider store={store}>
    <div className={style.page}>
      <HeaderView config={UrlConfig} />
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