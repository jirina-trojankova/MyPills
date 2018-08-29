import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'unstated';
import { default as Headline } from './components/Headline/Headline';
import Items from './components/Items/Items';
import * as style from './main-style.scss';
import UrlConfig from './url_config';
import FooterView from './views/FooterView/FooterView';
import Form from './views/FormView/FormView';
import HeaderView from './views/HeaderView/HeaderView';
import ItemsView from './views/ItemsView/ItemsView';

// const store = configureStore();

// name is unique
const dummyItemArray = [
  {name: 'Aspirin'},
  {name: 'Panadol'},
  {name: 'Ibuprofen'},
];

const App = (props) => (
  <Provider>
    <div className={style.page}>
      <HeaderView config={UrlConfig} />
      <div className={style.center}>
        {/*<Headline />*/}
        <Form />
        <Items/>
      </div>
      <FooterView />
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