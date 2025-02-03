import React, { useState } from 'react';
import '../Styles/Navbar.css';

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <h1 className="logo">Serverpie</h1>
      <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={`nav1 ${isMenuOpen ? 'show' : ''}`}>
        {["Home", "Domain", "Hosting", "Server", "DDOS Protection", "Contact Us"].map((item, index) => (
          <li
            key={index}
            className={activeIndex === index ? "active" : ""}
            onClick={() => handleClick(index)}
          >
            {item}
          </li>
        ))}
      </ul>
      <button className="loginbtn">Login</button>
    </nav>
  );
};

export default Navbar;
