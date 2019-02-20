import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './home';
import { About } from './about';

export class Pages extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    );
  }
}
