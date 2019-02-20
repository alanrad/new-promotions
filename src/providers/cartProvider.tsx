import { EventEmitter } from 'events';
import dispatcher from '../utils/dispatcher';
import { client } from '../utils/createClient';
import { cartActionTypes } from '../constants/actionTypes';
import { CHANGE_EVENT } from '../constants/events';
import gql from 'graphql-tag';

const GET_CART = gql`
  query {
    cart @client {
      eventId
      numOfItems
    }
  }
`;

class CartProvider extends EventEmitter {
  getCartContent() {
    const { cart } = client.readQuery({ query: GET_CART });
    return cart;
  }

  handleActions(action: any) {
    switch (action.type) {
      case cartActionTypes.UPDATE_ORDER: {
        this.emit(CHANGE_EVENT);
        break;
      }
      default:
    }
  }
}

export const cartProvider = new CartProvider();
dispatcher.register(cartProvider.handleActions.bind(cartProvider));
