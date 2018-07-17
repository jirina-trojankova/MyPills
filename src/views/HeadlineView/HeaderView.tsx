import * as React from 'react';

const HeaderView = (props) => {
  return <div>
            {props.config.map((item) =>
            <a key={item.title} href={item.url} target="blank">{item.title}</a>,
            )}
        </div>;
};

export default HeaderView;