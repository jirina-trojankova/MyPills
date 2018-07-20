import * as React from 'react';
import * as style from './style.scss';

const ItemView = (props) => {
  return<div className={style.listItem}>
              <div className={style.name}>{props.item.name}</div>
              <div className={style.column}>
                  <div className={style.right}>zbývá: 5</div>
                  <div className={style.right}>
                    <button className={style.button}>Smazat</button>
                    <button className={style.button}>Upravit</button>
                  </div>
              </div>
          </div>;
};

export default ItemView;