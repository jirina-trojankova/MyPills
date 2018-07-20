import * as React from 'react';
import * as style from './style.scss';

const InputView = (props) => {

  return <div className={`${style.center} ${style.input}`}>
            <label htmlFor="name">{props.name}</label>
            <br/>
            <input/>
          </div>;
};

export default InputView;