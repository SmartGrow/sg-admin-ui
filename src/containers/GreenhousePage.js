import React, { Component } from 'react';


class GreenhousePage extends Component {

  state = {
    greenhouseData: {}
  }

  constructor(props) {
    super(props);
    this.fetchGreenhouseData = this.fetchGreenhouseData.bind(this);
    this.turnOn = this.turnOn.bind(this);
    this.turnOff = this.turnOff.bind(this);
  }

  componentDidMount() {
    this.setState({
      fetchGreenhouseDataIntervalId: setInterval(this.fetchGreenhouseData, 800)
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.fetchGreenhouseDataIntervalId);
  }

  fetchGreenhouseData() {
    fetch('/api/greenhouse')
    .then(res => res.ok ? res.json() : res.text)
    .then(greenhouseData => this.setState({ greenhouseData }));
  }

  turnOn() {
    fetch('/api/greenhouse/turn-on', { method: 'PUT' })
    .then(res => this.fetchGreenhouseData());
  }

  turnOff() {
    fetch('/api/greenhouse/turn-off', { method: 'PUT' })
    .then(res => this.fetchGreenhouseData());
  }

  render() { 
    let { greenhouseData } = this.state;

    return (
      <div>
        <h1>Greenhouse</h1>
        <div><pre>{JSON.stringify(greenhouseData, null, 2) }</pre></div>
        <br />
        
        { greenhouseData.board && 
        <div>
          <button disabled={greenhouseData.board.on} onClick={this.turnOn}>Turn on</button>
          <button disabled={!greenhouseData.board.on} onClick={this.turnOff}>Turn off</button>
        </div>}
      </div>
    )
  }
}
 
export default GreenhousePage;