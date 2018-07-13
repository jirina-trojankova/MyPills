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
  headlineName: 'string';
  setHeadlineNameHandler: (val: string) => void;
}

const HeadlineView = (props:HeadlineViewProps) => {
  const {headlineName} = props;
  const {setHeadlineNameHandler} = props;

  return <div>
          <h1 className={style.crimsonColor}>Headline name: {headlineName}</h1>
          <input type="text" value={headlineName} onChange={ (val) => setHeadlineNameHandler(val.target.value)}/>

          {/*<button onClick={() => setHeadlineCounterHandler(headlineCounter - 1)}>Decrement</button>
          <button onClick={() => setHeadlineCounterHandler(headlineCounter + 1)}>Increment</button>*/}
          </div>;
};

export default HeadlineView;
