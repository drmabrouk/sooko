import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Helthedia</h3>
          <p>Advancing human knowledge through accessible scientific and medical research.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/library">Research Library</Link></li>
            <li><Link to="/categories">Scientific Categories</Link></li>
            <li><Link to="/latest">Latest Studies</Link></li>
            <li><Link to="/featured">Featured Research</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Information</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact & Support</Link></li>
            <li><Link to="/login">Admin Login</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Connect</h4>
          <div className="social-icons">
            <Mail size={20} />
            <Github size={20} />
            <Twitter size={20} />
            <Linkedin size={20} />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Helthedia Project. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
