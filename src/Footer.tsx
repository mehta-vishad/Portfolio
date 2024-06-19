import React from 'react';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Footer.css';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <div className={darkMode ? 'footer dark-mode' : 'footer light-mode'}>
      <div className="footer-content">
        <div className="footer-column">
          <p className="big-bold-text">Let's Connect! I'm open to new opportunities and collaborations.</p>
        </div>
        <div className="footer-column contact-info">
          <p>
            <FaEnvelope className="icon" />
            <a href="mailto:mehta.vishad@northeastern.edu" className="contact-link">
              mehta.vishad@northeastern.edu
            </a>
          </p>
          <p>
            <FaPhone className="icon" />
            <a href="tel:+18573954511" className="contact-link">
              +1 857-395-4511
            </a>
          </p>
          <p>
            <FaLinkedin className="icon" />
            <a href="https://www.linkedin.com/in/vishadmehta/" className="contact-link" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </p>
        </div>
      </div>
      <div className="separator"></div>
      <div className="footer-bottom">
        <div className="left-side">
          <a href="#AMA" className="footer-link">AMA</a>
          <a href="#aboutme" className="footer-link">About</a>
          <a href="#projects" className="footer-link">Projects</a>
          <a href="#resume" className="footer-link">Resume</a>
        </div>
        <div className="right-side">
          <span>&copy; All rights reserved</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
