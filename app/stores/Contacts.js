import { observable, action } from 'mobx';

class Contacts {
  @observable all = [
    { id: 1, name: 'jeff spires', email: 'jeff@spires.com' },
    { id: 2, name: 'terry spires', email: 'terry@spires.com' },
    { id: 3, name: 'ricky spires', email: 'ricky@spires.com' },
  ];

  @action add (contactData) {
    const existing = this.all;
    this.all = existing.concat(contactData);
  }

  @action find (contactId) {
    return (
      this.all.slice().filter(
        c => c.id === parseInt(contactId, 10),
      )[0]
    )
  }

  @action remove (contactId) {
    const existing = this.all;
    this.all = existing.filter(
      c => c.id !== contactId
    );
  }
}

export default new Contacts();
