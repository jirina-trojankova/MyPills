import * as React from 'react';
import * as style from './style.scss';

const Link = (props) => {
  return  <a className={style.link} href={props.item.url} target="blank">{props.item.title}</a>;
};

export default Link;