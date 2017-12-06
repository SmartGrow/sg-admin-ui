import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {users: [], error: false}
  
  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users, error: false }))
      .catch(() => this.setState({ users: [], error: true }));
  }

  render() {
    return (
      <div className="App">
        <h1>SmartGrow</h1>
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
