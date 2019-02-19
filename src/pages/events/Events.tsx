import React, { Fragment } from 'react';
import { Navbar } from '../../shared/Navbar';
import { EventsContainer } from '../../containers/EventsContainer'

export const Events = () => (
  <Fragment>
    <Navbar />
    <EventsContainer />
  </Fragment>
);
