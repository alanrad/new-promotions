import { EventEmitter } from 'events';
import { client } from '../utils/createClient';
import gql from 'graphql-tag';

const GET_PROMOTIONS = gql`
  query {
    promotions @client {
      id
      events
      numOfItems
      price
      percentage
      whichItem
      freeItems
      rule
    }
  }
`;

class PromotionProvider extends EventEmitter {
  getPromotions() {
    const { promotions } = client.readQuery({ query: GET_PROMOTIONS });
    return promotions;
  }
}

export const promotionProvider = new PromotionProvider();
