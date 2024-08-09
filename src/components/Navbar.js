import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Sports Card E-Commerce</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Prodotti</Link></li>
        <li><Link to="/account">Account</Link></li>
        <li><Link to="/login">Login</Link></li> {/* Aggiungi questo link */}
        <li><Link to="/register">Registrati</Link></li> {/* Link per registrazione */}
      </ul>
    </nav>
  );
};

export default Navbar;
