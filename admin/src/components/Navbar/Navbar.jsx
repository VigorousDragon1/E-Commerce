import React from 'react';
import navlogo from '../../assets/nav-logo.svg'; // Adjust path as needed
import navProfile from '../../assets/nav-profile.svg';

import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={navlogo} alt="Navigation Logo" className="nav-logo" />
      <img src={navProfile} alt="Navigation Profile" className="nav-profile" />
    </div>
  );
};

export default Navbar;
