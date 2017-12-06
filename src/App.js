import React, { Component } from 'react';
import './App.css';
import { clearInterval } from 'timers';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {users: [], error: false, counter: "Loading ..."};

    this.addUser = this.addUser.bind(this);
    this.fetchCounter = this.fetchCounter.bind(this);
  }
  
  addUser() {
    fetch('/api/users/add');
    this.fetchUsers();
  }

  fetchUsers() {
    fetch('/api/users')
    .then(res => res.json())
    .then(users => this.setState({ users, error: false }))
    .catch(() => this.setState({ users: [], error: true }));
  }

  fetchCounter() {
    fetch('/api/users/counter')
    .then(res => res.text())
    .then(counter => this.setState({ counter }));
  }

  componentDidMount() {
    this.fetchUsers();
    this.setState({ intervalId: setInterval(this.fetchCounter, 3000) });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    return (
      <div className="App">
        <h1>SmartGrow</h1>

        Tick-tack: {this.state.counter} 

        <br/>
        
        <button onClick={this.addUser}>Add User</button>
        {this.state.error &&
          <div>Some error occurred while trying to fetch users.</div>
        }
        {!this.state.error &&
          <div>
            { this.state.users.map(user => <div key={user.id}>{user.username}</div>) }
          </div>
        }
      </div>
    );
  }
}

export default App;
