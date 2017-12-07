import './App.css';

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import NotFound from './components/NotFoundPage';
import HomePage from './components/HomePage';
import GreenhousePage from './containers/GreenhousePage';


class App extends Component {

  render() {
    return (
      <div>
        <Header />

        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/greenhouse' component={GreenhousePage} />
          <Route component={NotFound} />
        </Switch>

      </div>
    );
  }
}

export default App;
