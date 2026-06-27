import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

const Navbar = ({ isScrolled }) => {
  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="nav-logo">EMBER</a>
        
        <ul className="nav-links">
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#experience" className="nav-link">Experience</a></li>
          <li><a href="#menu" className="nav-link">Menu</a></li>
          <li><a href="#gallery" className="nav-link">Gallery</a></li>
        </ul>

        <button className="btn-primary" onClick={() => document.getElementById('reservation').scrollIntoView()}>
          Reserve a Table
        </button>

        <button className="mobile-menu-btn">
          <Menu size={28} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
