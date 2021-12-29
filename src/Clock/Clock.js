import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  goBack() {
    let nextDate = this.state.date;
    nextDate.setSeconds(nextDate.getSeconds() - 10);
    this.setState({
      date:nextDate
    })
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div>
        <h3>
          current time is [{this.state.date.toLocaleTimeString()}]
        </h3>
        <button onClick={this.goBack.bind(this)}> before 10 second </button>
      </div>
    );
  }
}

//ReactDOM.render(<Clock/>, document.getElementById('test'));

export default Clock;