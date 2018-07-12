import * as React from 'react';
import * as style from './style.scss';

interface HeadlineViewProps {
  headlineCounter:number;
  setHeadlineCounterHandler: (val: number) => void;
}

const HeadlineView = (props:HeadlineViewProps) => {
  // data
  const {headlineCounter} = props;
  // handlers
  const {setHeadlineCounterHandler} = props;

  return <div>
    <h1 className={style.crimsonColor}>Headline counter: {headlineCounter}</h1>
    <button onClick={() => setHeadlineCounterHandler(headlineCounter + 1)}>Increment</button>
    <button onClick={() => setHeadlineCounterHandler(headlineCounter - 1)}>Decrement</button>

  </div>;
};

export default HeadlineView;