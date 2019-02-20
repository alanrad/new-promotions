/*
 * Cart Container
 * Container are concerned with how things work
 * Provide the data and behavior to view or other container components
 * Are often stateful as they tend to serve as data sources
 */

import React, { Component } from 'react';
import { cartProvider } from '../providers/cartProvider';
import { eventProvider } from '../providers/eventProvider';
import { promotionProvider } from '../providers/promotionProvider';
import { Cart } from '../components/Cart';

interface ICartContainerStates {
  cart: any;
}

const events = eventProvider.getAvailableEvents();
const promotions = promotionProvider.getPromotions();

export class CartContainer extends Component<{}, ICartContainerStates> {
  state = {
    cart: cartProvider.getCartContent(),
  };

  componentWillMount() {
    cartProvider.on('change', this.updateCart);
  }

  componentWillUnmount() {
    cartProvider.removeListener('change', this.updateCart);
  }

  updateCart = () => {
    this.setState({
      cart: cartProvider.getCartContent(),
    });
  };

  availablePromotios = (cart: any): any => {
    let promosCanBeUsed: any = [];
    let eligibleEvents: any = [];

    if (cart.length) {
      promotions.forEach(promo => {
        let countItemsFitInPromo = 0;
        if (promo.events.length === 0) {
          // all items in the cart which fit in the promo
          countItemsFitInPromo = cart
            .map(item => item.numOfItems)
            .reduce((total = 0, count) => total + count, 0);
        } else {
          eligibleEvents = cart.filter(item =>
            promo.events.includes(item.eventId)
          );
          countItemsFitInPromo = eligibleEvents
            .map(item => item.numOfItems)
            .reduce((total, count) => total + count, 0);
        }
        if (countItemsFitInPromo >= promo.numOfItems) {
          eligibleEvents = eligibleEvents.map(event => event.eventId);
          promosCanBeUsed.push({
            promotionId: promo.id,
            events: eligibleEvents.length
              ? events
                  .filter(event => eligibleEvents.includes(event.id))
                  .map(item => item.event)
                  .join(' and ')
              : 'Any',
            rule: promo.rule,
          });
        }
      });
    }
    return promosCanBeUsed;
  };

  render() {
    const { cart } = this.state;
    return <Cart availablePromos={this.availablePromotios(cart)} />;
  }
}
