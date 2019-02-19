import { client } from '../utils/createClient';
import gql from 'graphql-tag';

const CART_DATA = gql`
  query {
    cart @client {
      eventId
      numOfItems
    }
  }
`;

class CartResolver {
  updateContent(order: any): any {
    return new Promise(resolve => {
      const data = {
        cart: order.map(({ eventId, numOfItems }: any) => ({
          eventId,
          numOfItems,
          __typename: 'CartItem',
        })),
      };
      console.log(data);
      client.writeQuery({ query: CART_DATA, data });
      resolve(true);
    });
  }
}

export const cartResolver = new CartResolver();
