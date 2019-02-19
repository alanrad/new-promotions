import React, { Component } from 'react';
import { client } from '../utils/createClient';
import { ApolloProvider } from 'react-apollo';

export class ApolloStore extends Component<{}, {}> {
  render() {
    return (
      <ApolloProvider client={client}>{this.props.children}</ApolloProvider>
    );
  }
}
