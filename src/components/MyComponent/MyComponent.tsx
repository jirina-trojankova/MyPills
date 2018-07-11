import * as React from 'react';
import { getSeconds } from '../../services/time-service';
import Time from '../Time/Time';
import Input from '../Input/Input';

export interface AppProps {
}

export type Timestamp = number;

interface AppState {
  time: Timestamp;
}

class MyComponent extends React.Component<AppProps, AppState> {
  private intervalId: number;

  public render() {
    return <Time current={getSeconds(Date.now())} />;
  }

  public componentDidMount() {
    if (!this.intervalId) {
      this.intervalId = setInterval(this.update.bind(this), 1000);
    }
  }

  public componentWillUnmount() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  private update = () => {
    this.forceUpdate();
  }
}

export default MyComponent;