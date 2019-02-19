import { EventEmitter } from 'events';
import dispatcher from '../utils/dispatcher';
import { client } from '../utils/createClient';
// import { filterActionTypes } from 'src/@complaints/actionTypes';
import gql from 'graphql-tag';

const PROMOTIONS_DATA = gql`
  query {
    events @client {
      id
      event
      cost
    }
  }
`;

// const CHANGE_EVENT = 'change';

class EventsProvider extends EventEmitter {
  getAvailableEvents() {
    const { events } = client.readQuery({ query: PROMOTIONS_DATA });
    return events;
  }

  handleActions(action: any) {
    switch (action.type) {
      // case filterActionTypes.UPDATE_FILTER: {
      //   this.emit(CHANGE_EVENT);
      //   break;
      // }
      default:
    }
  }
}

export const eventsProvider = new EventsProvider();
dispatcher.register(eventsProvider.handleActions.bind(eventsProvider));
