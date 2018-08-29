import * as React from 'react';
import { Subscribe } from 'unstated';
import { PillsContainer } from '../../containers/PillsContainer';
import ItemsView from '../../views/ItemsView/ItemsView';

const Items = () => {
  return <Subscribe to={[PillsContainer]}>
    {
      (pillsContainer)=> {
        return  <ItemsView items={pillsContainer.state} />;
      }
    }
  </Subscribe>;
};

export default Items;