import { observable } from 'mobx';

class Contacts {
  @observable all = [
    { id: 1, name: 'jeff spires', email: 'jeff@spires.com' },
    { id: 2, name: 'terry spires', email: 'terry@spires.com' },
    { id: 3, name: 'ricky spires', email: 'ricky@spires.com' },
  ];
}

export default new Contacts();
