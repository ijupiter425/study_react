import logo from './logo.svg';
import './App.css';
import React from 'react';
import Customer from './components/Customer';
import Customer2 from './components/Customer2';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

const customers = [ 
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '홍길동',
    'birthday': '123456',
    'gender': 'man',
    'job': 'student'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '홍길동2',
    'birthday': '123456',
    'gender': 'man',
    'job': 'design'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '홍길동3',
    'birthday': '123456',
    'gender': 'man',
    'job': 'programer'
  }   
]
class App extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>num</TableCell>
              <TableCell>image</TableCell>
              <TableCell>name</TableCell>
              <TableCell>birthday</TableCell>
              <TableCell>gender</TableCell>
              <TableCell>job</TableCell>
            </TableRow>
          </TableHead>
          <TableBody> 
            { customers.map( customer => {
              return ( 
                <Customer2
                key={customer.id}
                id={customer.id}
                image={customer.image}
                name={customer.name}
                birthday={customer.birthday}
                gender={customer.gender}
                job={customer.job}
                />
                ) } ) }
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default withStyles(styles)(App);


      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>