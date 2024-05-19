// eslint-disable-next-line
import React from 'react';
import './Header.css';

const Header = () => (
  <header className="header-banner">
    <div className="container text-center text-white">
      <div className="header-image">
        <img src="https://www.guvi.in/web-build/images/guvi-logo.e8ad68fbd8dc0a5fc2f7c4ffd580c54d.png" alt="Banner" className="img-fluid" />
      </div>
      <div className="header-content">
        <h1>Welcome to Guvi Courses</h1>
        <p className="lead">Guvi is an online learning platform that has successfully placed over 10,000 students.</p>
        <a href="#features" className="btn btn-light btn-lg">Learn More</a>
      </div>
    </div>
  </header>
);

export default Header;
