import * as React from 'react';
import * as style from './style.scss';

const MyInput = (props) => {
  return <div>
    <form>
    <input type="text" value={props.text} />
    <input type="submit" value="Submit" />
    </form>
  </div>;
};

export default MyInput;