import * as React from 'react';
import * as style from './style.scss';
// WHY VOID?!

/*interface HeadlineViewProps {
  headlineCounter:number;
  setHeadlineCounterHandler: (val: number) => void;
}

const HeadlineView = (props:HeadlineViewProps) => {
  // data
  const {headlineCounter} = props;
  // handlers
  const {setHeadlineCounterHandler} = props;*/

interface HeadlineViewProps {
  headlineName: string;
  inputValue: string;
  setInputValueHandler: (val: string) => void;
  handleSubmit: () => void;
}

const HeadlineView = (props:HeadlineViewProps) => {
  const {headlineName, inputValue} = props;
  const {setInputValueHandler} = props;
  const {handleSubmit} = props;

  return <div>
              <h1 className={style.crimsonColor}>Headline name: {headlineName}</h1>
              <input type="text" value={inputValue} onChange={ (event) => setInputValueHandler(event.target.value)}/>
              <button onClick={handleSubmit}>Button</button>
          {/*<button onClick={() => setHeadlineCounterHandler(headlineCounter - 1)}>Decrement</button>
          <button onClick={() => setHeadlineCounterHandler(headlineCounter + 1)}>Increment</button>*/}

          </div>;
};

export default HeadlineView;
