import React from 'react';
import { observer } from 'mobx-react';

import Contact from './Contact';
import styles from './Collection.sass';

@observer(['contacts'])

class Layout extends React.Component {

  addContact = (e) => {
    e.preventDefault();

    const contacts = this.props.contacts.all.slice();
    const newId = contacts[contacts.length - 1].id + 1;

    this.props.contacts.add({
      id: newId,
      name: this.refs.name.value,
      email: this.refs.email.value
    });

    this.refs.name.value = null;
    this.refs.email.value = null;

  }

  newContact = () =>
    <div className='puge-g'>
      <div className='puge-u-12-24'>
        <form className='pure-form' onSubmit={this.addContact}>
          <fieldset>
              <legend>New contact</legend>

              <input ref='email' type='email' placeholder='name@example.com' />
              <input ref='name' type='text' placeholder='Name' />
              <button type="submit" className="pure-button pure-button-primary">Add</button>

          </fieldset>
        </form>
      </div>
    </div>;


  render() {
    return(
      <div id='Collection' className={styles.main}>

        {this.newContact()}

        <div className='puge-g'>
          {this.props.contacts.all.slice().map(info =>
            <Contact key={info.id} {...info}/>
          )}
        </div>

      </div>
    );
  }
}

export default Layout;
