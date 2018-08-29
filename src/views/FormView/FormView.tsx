import * as React from 'react';
import Items from '../../components/Items/Items';
import ButtonView from '../ButtonView/ButtonView';
import InputView from './InputView';
import * as style from './style.scss';

const FormView = (props) => {
  const openForm = props.openForm;
  const toggleForm = props.toggleForm;

  // name is unique
  const dummyItemArray = [
    {name: 'Aspirin'},
    {name: 'Panadol'},
    {name: 'Ibuprofen'},
  ];
  
  return <div className={style.center}>
    {!openForm && <ButtonView action={toggleForm}/>}
    {openForm && <div className={style.frame}>
      <div className={style.outerWrapper}>
        <div className={style.innerWrapper}>
          <InputView name="Název"/>
          <InputView name="Počet tablet"/>
        </div>
        <div className={style.innerWrapper}>
          <InputView name="První dávka"/>
          <InputView name="Interval"/>
        </div>
        <div className={style.centerButtons}>
          <button className={`${style.center} ${style.button}`}>Změnit</button>
          <button className={`${style.center} ${style.button}`}>Uložit</button>
        </div>
      </div>
    </div>}

  </div>;
};

class Form extends React.Component {
  public state = {openForm: false};

  constructor(props) {
    super(props);
  }

  public toggle() {
    this.setState((prevState: {openForm: boolean}, props) => ({
      openForm: !prevState.openForm,
    }));
  }

  public render() {
    return <div>
      <Items/>
      <FormView toggleForm={this.toggle.bind(this)} openForm={this.state.openForm}/>
          </div>;
  }
}

export default Form;