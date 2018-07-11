import * as React from 'react';
// import * as style from './style.scss';

export interface InputViewStateProps {
  current: number;
  time: number;
}

export interface InputViewHandlerProps {
}

export interface InputViewProps extends InputViewStateProps, InputViewHandlerProps {
}

const getElapsed = (start: number, current: number) => {
  return current - start;
};

const InputView = (props: InputViewProps) => {
  const {current, time} = props;
  return <div>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" 
                        value={this.state.value} 
                        onChange={this.handleChange}/>
                <input type="submit" value="Sub"/>
            </form>
        </div>;
};

export default InputView;