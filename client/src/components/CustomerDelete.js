import React from 'react';

class CustomerDelete extends React.Component {
  deleteCustomer(id) {
    const url = '/api/customers/' + id;
    fetch(url, {
      method: 'DELETE'
    })
    .then((response) => {
      console.log(response);
      this.props.stateRefresh();
    })
    .catch(console.log)
  }
  render() {
    return (
      <button onClick={(e) => {this.deleteCustomer(this.props.id)}}>delete</button>
    )
  }
}

export default CustomerDelete;