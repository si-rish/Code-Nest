import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import logo from '../assets/logo7.png'
import drop from '../assets/drop.png'

import './Navbar.css'; // Assuming you have a CSS file for styling

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="logo"><img src={logo} className='cn-logo'/></div>

      <div className={`menu ${showMenu ? 'show' : ''}`}>
        <Link to="/"> Home</Link>
        <Link to="/newsletter"> Newsletter</Link>
        <div className="submenu">
          <Link to="/resources"> Resources&nbsp;<img src={drop} className='cn-drop'/> </Link>
          <div className="dropdown-content">
            <Link to="/roadmaps">Roadmaps</Link><hr/>
            <Link to="/projects">Projects</Link><hr/>
            <Link to="/books">Books</Link><hr/>
            <Link to="/resume-builder">Resume Builder</Link>
            {/* <Link to="/others">Others</Link> */}
          </div>
        </div>
        {/* <div className="submenu">
          <Link to="/utilities">Utilities&nbsp;<img src={drop} className='cn-drop'/> </Link>
          <div className="dropdown-content">
            <Link to="/resume-builder">Resume Builder</Link><hr/>
            <Link to="/jobs-internships">Jobs & Internships</Link>
          </div>
        </div> */}
        <div className="submenu">
          <Link to="/practice">Practice&nbsp;<img src={drop} className='cn-drop'/></Link>
          <div className="dropdown-content">
            <Link to="/aptitude">Aptitude</Link><hr/>
            <Link to="/reasoning">Logical Reasoning</Link><hr/>
            <Link to="/verbal">Verbal Ability</Link><hr/>
            <Link to="/interview-questions">Interview Questions</Link><hr/>
            <Link to="/problems">Coding Problems</Link>
          </div>
        </div>
        <Link to="/community">Community</Link>
      </div>

      <div className="auth-buttons">
        <Link to="/login"> Login</Link>
        <Link to="/signup"> Signup</Link>
      </div>

      <div className="mobile-menu-icon" onClick={toggleMenu}>
        
      </div>
    </nav>
  );
};

export default Navbar;
