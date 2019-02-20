import dispatcher from '../utils/dispatcher';
import { cartActionTypes } from '../constants/actionTypes';
import { cartResolver } from '../resolvers/cartResolver';

export const updateCart = (order: object): void => {
  // chain of actions could be dispatched from here
  cartResolver.updateContent(order).then(() => {
    dispatcher.dispatch({ type: cartActionTypes.UPDATE_ORDER });
  });
};
