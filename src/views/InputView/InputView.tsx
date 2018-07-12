import * as React from 'react';

const InputView = () => {
  return(
    <div>
      <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" 
                  value={this.state.value} 
                  onChange={this.handleChange}/>
          <input type="submit" value="Sub"/>
      </form>
    </div>
);
//   return <div>
//     <div className={style.defaultClass}>Elapsed time: {getElapsed(time, current)}</div>
//     <div className={style.secondaryClass}>Initial time: {time}</div>
//   </div>;
};

export default InputView;