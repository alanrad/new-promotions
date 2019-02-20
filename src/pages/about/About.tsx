import React, { Fragment } from 'react';
import { Navbar } from '../../shared/Navbar';

export const About = () => (
  <Fragment>
    <Navbar />
    <div className="about-app">
      <h1>What does New Promotion App have to offer?</h1>
      <p>
        Keeping the data concerns away from the view components and into the
        container components replicates the conventional controller — view
        relationship which is a great way to structure an app. Separation of
        business logic from presentation layer is a good approach to demonstrate
        my ability to make modular and scalable web applications.
      </p>
    </div>
  </Fragment>
);
