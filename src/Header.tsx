import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <span className="logo-icon">🚗</span>
          <span className="logo-text">TOSH RYDER</span>
        </div>
        <nav className="nav">
          <a href="#home">Home</a>
          <div className="dropdown">
            <a href="#cars" className="dropbtn">Cars ▼</a>
            <div className="dropdown-content">
              <a href="#cars">Browse All</a>
              <a href="#suv">SUVs</a>
              <a href="#sedan">Sedans</a>
              <a href="#pickup">Pickups</a>
            </div>
          </div>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;