import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './styles.css';

export const Navbar = () => (
  <div className="navbar">
    <div className="menu">
      <div className="navbar-logo">
        <img src={logo} className="app-logo" alt="logNew Promotions" />
      </div>
      <Link className="navbar-link" to="/">
        Events
      </Link>
      <Link className="navbar-link" to="/cart">
        Cart
      </Link>
    </div>
  </div>
);
