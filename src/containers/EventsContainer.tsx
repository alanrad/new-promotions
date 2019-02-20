/*
 * Events Container
 * Container are concerned with how things work
 * Provide the data and behavior to view or other container components
 * Are often stateful as they tend to serve as data sources
 */

import React, { Component } from 'react';
import { Table } from '../components/Table';
import { eventProvider } from '../providers/eventProvider';
import * as cartActions from '../actions/cartActions';

interface IEventsContainerStates {
  headers: object;
  events: object;
}

export class EventsContainer extends Component<{}, IEventsContainerStates> {
  state = {
    headers: ['Event', 'Cost', 'Number of tickets'],
    events: eventProvider.getAvailableEvents(),
  };

  updateOrderState = (order: any): void => {
    cartActions.updateCart(
      Object.keys(order).map(key => ({
        eventId: Number(key),
        numOfItems: order[key],
      }))
    );
  };

  render() {
    const { headers, events } = this.state;
    return (
      <Table
        headers={headers}
        events={events}
        orderUpdated={state => this.updateOrderState(state)}
      />
    );
  }
}
