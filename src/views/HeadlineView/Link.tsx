import * as React from 'react';

const Link = (props) => {
  return <div>
            <a key={props.item.title} href={props.item.url} target="blank">{props.item.title}</a>,
        </div>;
};

export default Link;