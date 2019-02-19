import React, { Component } from 'react';
import { Table } from '../components/Table';

interface IFilterContainerStates {
  headers: object;
  events: object;
}

export class EventsContainer extends Component<{}, IFilterContainerStates> {
  state = {
    headers: ['Event', 'Cost', 'Number of tickets'],
    events: [
      { id: 1, event: 'Kids Party', cost: 220, __typename: 'Event' },
      { id: 2, event: 'Wine Tour', cost: 440, __typename: 'Event' },
      { id: 3, event: 'Team Building', cost: 800, __typename: 'Event' },
      { id: 4, event: 'Picnic', cost: 110, __typename: 'Event' },
    ],
  };

  // componentWillMount() {
  // }

  // componentWillUnmount() {
  // }

  render() {
    const { headers, events } = this.state;
    return <Table headers={headers} events={events} />;
  }
}
