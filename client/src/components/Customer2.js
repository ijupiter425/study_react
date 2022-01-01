import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CustomerDelete from './CustomerDelete';

class Customer2 extends React.Component {
  render() {
    const imagestyle = {
      height: "70px",
      width: "50px",
    };
    return (
      <TableRow>
        <TableCell>{this.props.id}</TableCell>
        <TableCell><img style={imagestyle} src={this.props.image} alt="profile"/></TableCell>
        <TableCell>{this.props.name}</TableCell>
        <TableCell>{this.props.birthday}</TableCell>
        <TableCell>{this.props.gender}</TableCell>
        <TableCell>{this.props.job}</TableCell>
        <TableCell><CustomerDelete stateRefresh={this.props.stateRefresh} id={this.props.id}/></TableCell>
      </TableRow>
    )
  }
}

export default Customer2;