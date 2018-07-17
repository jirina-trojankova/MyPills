import * as React from 'react';

const ItemsView = (props, index) => {
  return  <div>
                <ul>
                  {props.items.map((name) =>
                    <li key={index}>{name.name}</li>)}
                </ul>
          </div>;
};

export default ItemsView;

