import React from 'react';
import Toggle from 'react-toggle';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Rohan Veit
      </div>
      <ul className="navbar-links">
        <li>
          Test
        </li>
        <li>
          yo
        </li>
        <li>
          1
        </li>
        <li>
          3
        </li>
      </ul>
      <div className="toggle">
        <Toggle
        aria-label='Dark mode toggle'
        />
      </div>
    </nav>
  );
};

export default Navbar;