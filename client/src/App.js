import logo from './logo.svg';
import './App.css';
import React from 'react';
import Customer from './components/Customer';
import Customer2 from './components/Customer2';
import CustomerAdd from './components/CustomerAdd';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  },
  progress: {
    margin: theme.spacing(2)
  }
})

/*
*** react life cycle ***
1) constructor()
2) componentWillMount()
3) render()
4) componentDidMount()

props or state => shouldComponentUpdate()
*/
class App extends React.Component {
  state = {
    customers: "",
    completed: 0
  }
  componentDidMount() {
    this.timer = setInterval(this.progress, 100);
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    console.log("web call start");
    const response = await fetch('/api/customers');
    const body = await response.json();
    console.log("end");
    return body;
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 5 });
//    console.log(completed);
  }

  render() {
    const {classes} = this.props;
    return (
      <div>
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
              { this.state.customers ? this.state.customers.map(customer => {
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
                  ) } ) :
                  <TableRow>
                    <TableCell colSpan="6" align="center">
                      <CircularProgress className={classes.progress} value={this.state.completed}/>
                    </TableCell>
                  </TableRow>
              }
            </TableBody>
          </Table>
        </Paper>
        <CustomerAdd/>
      </div>
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

      // const customers = [ 
//   {
//     'id': 1,
//     'image': 'https://placeimg.com/64/64/1',
//     'name': '홍길동',
//     'birthday': '123456',
//     'gender': 'man',
//     'job': 'student'
//   },
//   {
//     'id': 2,
//     'image': 'https://placeimg.com/64/64/2',
//     'name': '홍길동2',
//     'birthday': '123456',
//     'gender': 'man',
//     'job': 'design'
//   },
//   {
//     'id': 3,
//     'image': 'https://placeimg.com/64/64/3',
//     'name': '홍길동3',
//     'birthday': '123456',
//     'gender': 'man',
//     'job': 'programer'
//   }   
// ]