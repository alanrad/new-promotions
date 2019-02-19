import dispatcher from '../utils/dispatcher';
import { cartActionTypes } from '../constants/actionTypes';
import { cartResolver } from '../resolvers/cartResolver';

export const updateCart = (order: object): void => {
  // a chain of actions could be dispatched from here
  cartResolver.updateContent(order).then(() => {
    dispatcher.dispatch({ type: cartActionTypes.UPDATE_ORDER });

    // complaintsResolver
    //   .fetchData()
    //   .then((response: any) => {
    //     dispatcher.dispatch({
    //       type: complaintsActionTypes.FILTERED_DATA_RECEIVED,
    //       data: response,
    //     });
    //   })
    //   .catch(error => {
    //     console.log('Failed to get data');
    //   });
  });
};
