import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Puul Admin Dashboard</h1>
      </div>
      
      <div className="navbar-profile">
        <div className="profile-info">
          <span className="profile-name">Kermit The Frog</span>
          <span className="profile-role">Admin</span>
        </div>
        <img
          src="https://lumiere-a.akamaihd.net/v1/images/character_themuppets_kermit_b77a431b.jpeg"
          alt="Profile"
          className="profile-picture"
        />
        
      </div>
      
    </nav>
  );
};

export default Navbar;
