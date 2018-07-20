import * as React from 'react';
import * as style from '../ButtonView/style.scss';

const ButtonView = (props) => {
  return <button className={style.button} onClick={props.action}>
            Přidej další lék
        </button>;
};

export default ButtonView;