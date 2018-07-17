import * as React from 'react';

const Link = (props) => {
  return  <a href={props.item.url} target="blank">{props.item.title}</a>;
};

export default Link;