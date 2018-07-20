import * as React from 'react';
import InputView from './InputView';
import * as style from './style.scss';


const formProps = [
  {name: 'Název'},
  {name: 'Počet tablet'},
  {name: 'První dávka'},
  {name: 'Interval'},
];

const FormView = () => {

  return <div className={`${style.center} ${style.frame}`}>
          <div className={style.outerWrapper}>
            <div className={style.innerWrapper}>
              <InputView name="Nazev" />
              <InputView name="Počet tablet" />
            </div>
            <div className={style.innerWrapper}>
              <InputView name="První dávka" />
              <InputView name="Interval" />
            </div>
            <div className={style.innerWrapper}>
              <button className={style.center}>Změnit</button>
              <button className={style.center}>Uložit</button>
            </div>
          </div>
      </div>;
};

export default FormView;