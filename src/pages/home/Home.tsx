import React, { Fragment } from 'react';
import { Navbar } from '../../shared/Navbar';
import { EventsContainer } from '../../containers/EventsContainer';
import { CartContainer } from '../../containers/CartContainer';

export const Home = () => (
  <Fragment>
    <Navbar />
    <div className="flex-container">
      <div className="flex-item">
        <EventsContainer />
      </div>
      <div className="flex-item">
        <CartContainer />
      </div>
    </div>
  </Fragment>
);
