import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Events } from './events/';
import { Cart } from './cart/';
// import { Test } from './test/';

export class Pages extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Events} />
          <Route path="/cart" component={Cart} />
          {/* <Route path="/test" component={Test} /> */}
        </Switch>
      </Router>
    );
  }
}
