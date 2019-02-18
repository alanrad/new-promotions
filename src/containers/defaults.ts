// Provide default application state
// Used to write initial state to the cache

export const defaults = {
  cart: [],
  events: [
    { id: 1, event: 'Kids Party', cost: 220, __typename: 'Event' },
    { id: 2, event: 'Wine Tour', cost: 440, __typename: 'Event' },
    { id: 3, event: 'Team Building', cost: 800, __typename: 'Event' },
    { id: 4, event: 'Picnic', cost: 110, __typename: 'Event' },
  ],
  promotions: [
    {
      id: 1,
      events: [],
      numOfItems: 5,
      price: null,
      percentage: { value: 20, item: 5, __typename: 'PercentDiscount' }, // item: 0 => applies discount to the total price for items included in this promo
      freeItems: 0,
      rule: 'Buy 5, Get 20% off the 5th experience',
      __typename: 'Promo',
    },
    {
      id: 2,
      events: [3],
      numOfItems: 2,
      price: 1500,
      percentage: null,
      freeItems: 0,
      rule: 'Buy 2 for $1500',
      __typename: 'Promo',
    },
    {
      id: 3,
      events: [2, 4],
      numOfItems: 4,
      price: null,
      percentage: null,
      freeItems: 1, // free items are the lowest priced items
      rule: 'Buy 4, ONLY Pay for 3',
      __typename: 'Promo',
    },
    {
      id: 4,
      events: [4],
      numOfItems: 2,
      price: null,
      percentage: null,
      freeItems: 1,
      rule: 'Buy 2, get 1 free',
      __typename: 'Promo',
    },
  ],
};
