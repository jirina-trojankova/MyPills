import * as React from 'react';
import TimeView from '../../views/TimeView/TimeView';
import MyInput from '../../views/TimeView/TimeView';


class MyComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newText: '',
    };
  }

  public render() {
    const newText = this.state;
    return <MyInput text={newText}  />;
  }

}

export default MyComponent;