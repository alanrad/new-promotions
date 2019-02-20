/*
 * Cart Component
 * Components are purely presentational and are concerned with how things look
 * Have no dependencies on the rest of the app such as actions, resolvers or app state
 * Receive data and callbacks exclusively via props
 * When they do have their own state, it’s UI state rather than data
 */

import React, { FC } from 'react';
import * as ClassNames from 'classnames';
import { isEven } from '../utils/common';
import './styles/cart.css';

interface ICartProps {
  availablePromos: any;
}

export const Cart: FC<ICartProps> = ({ availablePromos }) => (
  <div className="cart-viewer">
    {availablePromos.length ? (
      <div>
        <p>Please select one of the available promotions below:</p>
        <div className="header-row">
          <div className="column">
            <div className="cell header">Promotions</div>
          </div>
          <div className="column">
            <div className="cell header">Event</div>
          </div>
        </div>

        {availablePromos.map(
          ({ promotionId: id, events, rule }, index: number) => (
            <div
              className={ClassNames({ row: true, alt: isEven(index) })}
              key={id}>
              <div className="column">
                <div className="cell">
                  <input type="radio" name="select-promo" value={id} /> {rule}
                </div>
              </div>
              <div className="column">
                <div className="cell">{events}</div>
              </div>
            </div>
          )
        )}
      </div>
    ) : (
      <div>
        <p>No promotions available. Please update your event selection.</p>
      </div>
    )}
  </div>
);
