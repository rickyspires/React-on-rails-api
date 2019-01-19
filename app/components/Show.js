import React from 'react';
import contactData from './data';

class Show extends React.Component {

  componentWillMount() {
    console.log(this.props.params.contactId);
    this.setState({
      contact: contactData.filter(c => c.id === parseInt(this.props.params.contactId, 10))[0],
    });
  }

  render() {
    return (
      <div id='Show'>
        {this.state.contact.name}
      </div>
    );
  }
}

export default Show;
