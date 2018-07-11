import * as React from 'react';
import * as style from './style.scss';

export interface TimeViewStateProps {
  current: number;
  time: number;
}

export interface TimeViewHandlerProps {
}

export interface TimeViewProps extends TimeViewStateProps, TimeViewHandlerProps {
}

const getElapsed = (start: number, current: number) => {
  return current - start;
};

const TimeView = (props: TimeViewProps) => {
  const {current, time} = props;
  return <div>
    <div className={style.defaultClass}>Elapsed time: {getElapsed(time, current)}</div>
    <div className={style.secondaryClass}>Initial time: {time}</div>
  </div>;
};

export default TimeView;