import * as React from 'react';
import ItemView from '../ItemView/ItemView';

const ItemsView = (props) => {
  return  <div>
                <ul>
                  {props.items.map((item) =>
                    <ItemView item={item} key={item.name}/>)}
                </ul>
          </div>;
};

export default ItemsView;

