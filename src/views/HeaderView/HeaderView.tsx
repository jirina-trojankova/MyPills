import * as React from 'react';
import Link from './Link';



const HeaderView = (props) => {
  return <div>
              {props.config.map((item) =>
              <Link key={item.url}  item={item} />)}
        </div>;
};

export default HeaderView;