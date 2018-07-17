import * as React from 'react';
import * as style from './style.scss';

const HeadlineView = (props) => {
  const {headlineName, inputValue} = props;
  const {setInputValueHandler} = props;
  const {handleSubmit} = props;

  return <div>
              <h1 className={style.crimsonColor}>Headline name: {headlineName}</h1>
              <input type="text" value={inputValue} onChange={ (event) => setInputValueHandler(event.target.value)}/>
              <button onClick={handleSubmit}>Button</button>
          </div>;
};

export default HeadlineView;
