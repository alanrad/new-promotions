import { EventEmitter } from 'events';
import dispatcher from '../utils/dispatcher';
import { client } from '../utils/createClient';
import gql from 'graphql-tag';

const GET_EVENTS = gql`
  query {
    events @client {
      id
      event
      cost
    }
  }
`;

class EventProvider extends EventEmitter {
  getAvailableEvents() {
    const { events } = client.readQuery({ query: GET_EVENTS });
    return events;
  }

  handleActions(action: any) {
    // no need for an event emitter at this stage
  }
}

export const eventProvider = new EventProvider();
dispatcher.register(eventProvider.handleActions.bind(eventProvider));
