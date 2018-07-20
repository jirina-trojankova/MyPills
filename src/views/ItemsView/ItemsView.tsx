import * as React from 'react';
import * as style from '../HeadlineView/style.scss';
import ItemView from '../ItemView/ItemView';


const ItemsView = (props) => {
  return  <div className={style.center}>
                <ul>
                  {props.items.map((item) =>
                    <ItemView item={item} key={item.name}/>)}
                </ul>
          </div>;
};

export default ItemsView;

