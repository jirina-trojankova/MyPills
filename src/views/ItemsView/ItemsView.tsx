import * as React from 'react';
import * as style from '../ItemsView/style.scss';
import ItemView from '../ItemView/ItemView';

const ItemsView = (props) => {
  const items = props.items;

  return  <div className={style.center}>
              <h2 className={style.headline}>Seznam léků:</h2>
                <div className={style.list}>
                  {items.map((item) =>
                    <ItemView item={item} key={item.jmeno}/>)}
                </div>
          </div>;
};

export default ItemsView;

