import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Library, Home, Beaker, Stethoscope } from 'lucide-react';

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
            <span className="nav-item">
              <Beaker size={18} />
              <span>Categories</span>
            </span>
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
