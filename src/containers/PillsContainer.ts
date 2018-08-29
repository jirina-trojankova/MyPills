import { Container } from 'unstated';


class PillsContainer extends Container<any> {
  public state = [{
    jmeno: 'Aspirin',
    zacatek: '',
    interval: '',
    pocet: 10,
  }, {
    jmeno: 'Panadol',
    zacatek: '',
    interval: '',
    pocet: 20,
  }, {
    jmeno: 'Ibuprofen',
    zacatek: '',
    interval: '',
    pocet: 30,
  }];
}

export {
  PillsContainer,
};