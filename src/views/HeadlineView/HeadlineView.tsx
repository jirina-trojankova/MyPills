import * as React from 'react';
import * as style from './style.scss';

const HeadlineView = (props) => {
  const {headlineName, inputValue} = props;
  const {setInputValueHandler} = props;
  const {handleSubmit} = props;
  // const classString = style.crimsonColor + ' ' + style.center === `${style.crimsonColor} ${style.center}`;
  return <div className={style.center}>
              <h1 className={style.crimsonColor}>Some headline</h1>
              {/*<h1 className={style.crimsonColor}>Headline name: {headlineName}</h1>*/}
              {/*<input value={inputValue} onChange={ (event) => setInputValueHandler(event.target.value)}/>*/}
          </div>;
};

export default HeadlineView;
