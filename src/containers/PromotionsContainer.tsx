import React, { Component } from 'react';

interface IPromotionContainerStates {
  filter?: any;
}

export class PromotionContainer extends Component<
  {},
  IPromotionContainerStates
> {
  state = {
    filter: false,
  };

  // componentWillMount() {
  // }

  // componentWillUnmount() {
  // }

  render() {
    return <p>Hi!</p>;
  }
}
