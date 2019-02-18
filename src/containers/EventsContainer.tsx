import React, { Component } from 'react';

interface IFilterContainerStates {
  filter?: any;
}

export class EventsContainer extends Component<{}, IFilterContainerStates> {
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
