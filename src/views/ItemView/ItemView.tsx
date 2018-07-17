import * as React from 'react';

const ItemView = (props) => {
  return <div>
          <ul>
            <li>{props.item.name}</li>
          </ul>
        </div>;
};

export default ItemView;