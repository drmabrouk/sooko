import React from 'react';
import { Link } from 'react-router-dom';
import { Library, Home, Beaker, Stethoscope, Info, Mail, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          <Beaker className="logo-icon" />
          <span>Helthedia</span>
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-item">
            <Home size={18} />
            <span>Home</span>
          </Link>
          <Link to="/library" className="nav-item">
            <Library size={18} />
            <span>Library</span>
          </Link>
          <div className="dropdown">
            <Link to="/categories" className="nav-item">
              <Beaker size={18} />
              <span>Categories</span>
            </Link>
            <div className="dropdown-content">
              <Link to="/category/Genetics">Genetics</Link>
              <Link to="/category/Medicine">Medicine</Link>
              <Link to="/category/Engineering">Engineering</Link>
              <Link to="/category/Technology">Technology</Link>
            </div>
          </div>
          <div className="dropdown">
            <span className="nav-item">
              <Stethoscope size={18} />
              <span>Specialties</span>
            </span>
            <div className="dropdown-content">
              <Link to="/specialty/Neurology">Neurology</Link>
              <Link to="/specialty/Oncology">Oncology</Link>
              <Link to="/specialty/Pharmacology">Pharmacology</Link>
              <Link to="/specialty/Molecular%20Biology">Molecular Biology</Link>
            </div>
          </div>
          <Link to="/about" className="nav-item">
            <Info size={18} />
            <span>About</span>
          </Link>
          <Link to="/contact" className="nav-item">
            <Mail size={18} />
            <span>Contact</span>
          </Link>
          <Link to="/admin" className="nav-item admin-link">
            <User size={18} />
            <span>Admin</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
