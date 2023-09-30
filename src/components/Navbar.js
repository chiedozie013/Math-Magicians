import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navbar = {
    // margin-top: '30px',
    display: 'flex',
    gap: '2rem',
    fontSize: '1.7rem',
    margin: '-200px',
  };
  return (
    <nav style={navbar}>
      <NavLink
        to="/"
        style={({ isActive }) => ({ color: isActive ? 'red' : 'grey' })}
      >
        Home
      </NavLink>

      <span>|</span>

      <NavLink
        to="/calculator"
        style={({ isActive }) => ({ color: isActive ? 'red' : 'grey' })}
      >
        Calculator
      </NavLink>

      <span>|</span>

      <NavLink
        to="/quotes"
        style={({ isActive }) => ({ color: isActive ? 'red' : 'grey' })}
      >
        Quotes
      </NavLink>
    </nav>
  );
};

export default Navbar;
