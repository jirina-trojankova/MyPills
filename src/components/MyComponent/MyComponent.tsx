import * as React from 'react';
import TimeView from '../../views/TimeView/TimeView';
import MyInput from '../../views/TimeView/TimeView';

export interface AppProps {
}

export type Timestamp = number;

interface AppState {
  time: Timestamp;
}

class MyComponent extends React.Component<AppProps, AppState> {
  private intervalId: number;

  constructor(props: AppProps) {
    super(props);

    this.state = {
      time: Date.now(),
    };
  }

  public render() {
    const { time } = this.state;
    const [elapsedSec, timeSec] = [MyComponent.getElapsed(time), time].map(value => MyComponent.getSeconds(value));
    return <MyInput text={timeSec}  />;
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

  private static getSeconds(timestamp: Timestamp): number {
    return Math.floor(timestamp / 1000);
  }

  private static getElapsed(start: number) {
    return Date.now() - start;
  }

  private update = () => {
    this.forceUpdate();
  }
}

export default MyComponent;