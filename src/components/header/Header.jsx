import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
     <h1>Logogo.Co</h1>
      <nav>
        <Link to='/'>Main</Link>
        <Link to='/products'>Products</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </nav>
    </div>
  );
};

export default Header;
