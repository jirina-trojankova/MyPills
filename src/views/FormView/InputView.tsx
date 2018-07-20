import * as React from 'react';
import * as style from './style.scss';

const InputView = (props) => {

  return <div className={style.center}>
            <label htmlFor="name">{props.name}</label>
            <br/>
            <input className={style.input}/>
          </div>;
};

export default InputView;