import * as React from 'react';
import * as style from './style.scss';

const MyInput = (props) => {
  const {elapsed, time} = props;
  return <div>
    <div className={style.defaultClass}>Elapsed time: {elapsed}</div>
    <div className={style.secondaryClass}>Initial time: {time}</div>
  </div>;
};

export default MyInput;