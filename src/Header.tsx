import React, { useState } from 'react';
import './Header.css';

interface HeaderProps {
  darkMode: boolean;
  toggleMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleMode }) => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const handleLinkClick = () => {
    setIsNavVisible(false);
  };

  return (
    <header className={`header ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="logo-container">
        {darkMode ? (
          <img src="./logo_dark.png" alt="Dark Logo" />
        ) : (
          <img src="./logo light.png" alt="Light Logo" />
        )}
      </div>
      <div className="menu-icon" onClick={() => setIsNavVisible(!isNavVisible)}>
        <i className="fas fa-bars"></i> {/* Hamburger Icon */}
      </div>
      <nav className={`nav-links ${isNavVisible ? 'show' : ''}`}>
        <div className="close-icon" onClick={() => setIsNavVisible(false)}>
          <i className="fas fa-times"></i> {/* Close Icon */}
        </div>
        <a href="#AMA" className="nav-link" onClick={handleLinkClick}>AMA</a>
        <a href="#aboutme" className="nav-link" onClick={handleLinkClick}>About Me</a>
        <a href="#projects" className="nav-link" onClick={handleLinkClick}>Projects</a>
        <a href="#contact" className="nav-link" onClick={handleLinkClick}>Contact Me</a>
      </nav>
      <div className="theme-switcher">
        <input type="checkbox" className="checkbox" id="checkbox" checked={darkMode} onChange={toggleMode} />
        <label htmlFor="checkbox" className="checkbox-label">
          <i className="fas fa-moon"></i>
          <i className="fas fa-sun"></i>
          <span className="ball"></span>
        </label>
      </div>
    </header>
  );
};

export default Header;
