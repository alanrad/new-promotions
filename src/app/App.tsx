import React, { Component } from 'react';
import { ApolloStore } from '../providers/ApolloStore';
import { Pages } from '../pages';
import './App.css';

export class App extends Component {
  render() {
    return (
      <ApolloStore>
        <Pages />
      </ApolloStore>
    );
  }
}
