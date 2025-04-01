import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
    setIsMenuOpen(false); // Close menu on click (for mobile)
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (index) => {
    setDropdown(dropdown === index ? null : index);
  };

  return (
    <>
    <nav>
      <div className="mainnav1">
      <h1 className="logo">Serverpie</h1>
      <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={`nav1 ${isMenuOpen ? 'show' : ''}`}>
        <li onClick={() => handleClick('/home')}>Home</li>
        
        {/* Domain Dropdown */}
        <li className="dropdown" onClick={() => toggleDropdown(1)}>Domain
          <ul className={`dropdown-menu ${dropdown === 1 ? 'open' : ''}`}>
            <li onClick={() => handleClick('/domain-registration')}>Domain Registration</li>
          </ul>
        </li>

        {/* Hosting Dropdown */}
        <li className="dropdown" onClick={() => toggleDropdown(2)}>Hosting
          <ul className={`dropdown-menu ${dropdown === 2 ? 'open' : ''}`}>
            <li onClick={() => handleClick('/shared-hosting')}>Shared Hosting</li>
            <li onClick={() => handleClick('/dedicated-hosting')}>Dedicated Hosting</li>
            <li onClick={() => handleClick('/wordpress-hosting')}>WordPress Hosting</li>
            <li onClick={() => handleClick('/envato-hosting')}>Envato Hosting</li>
          </ul>
        </li>

        {/* Server Dropdown */}
        <li className="dropdown" onClick={() => toggleDropdown(3)}>Server
          <ul className={`dropdown-menu ${dropdown === 3 ? 'open' : ''}`}>
            <li onClick={() => handleClick('/vps-server')}>VPS Server</li>
            <li onClick={() => handleClick('/windows-server')}>Windows Server</li>
            <li onClick={() => handleClick('/dedicated-server')}>Dedicated Server</li> 
          </ul>
        </li>

        <li onClick={() => handleClick('/ddos-protection')}>DDOS Protection</li>
        <li onClick={() => handleClick('/contact')}>Contact Us</li>
      </ul>
      </div>
      <button className="loginbtn" onClick={() => handleClick('/login')}>Login</button>
    </nav>
     <div className=' h-[40px]  bg-[#FFE59D] items-center'>
     <p className='text-4xl font-normal text-[14px] align-middle ml-[95px] pt-[10px]' style={{fontFamily: "'Inter',sans-serif"}}>Launch your website today with a domain that works for you!</p>
   </div>
   </>
  );
};

export default Navbar;
