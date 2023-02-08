import React from 'react';
import { Link } from 'react-router-dom';

function Header({currentPage}) {
  return (

    <header>
      <div className='inner-wrapper' id="navBarContainer">
        <div class="logo-wrapper">Ajila's Portfolio</div>
        <ul id="navBar">
          <li className="nav-item">
         
            <Link to="about-me">About Me</Link>
          </li>
          <li className="nav-item">
            <Link to="portfolio">Portfolio</Link>
           
          </li>
          <li className="nav-item">
          <Link to="contact-me">Contact</Link>
           
          </li>
          <li className="nav-item">
            <Link to="resume">Resume</Link>
          </li>
        </ul>
      </div>
    </header>

  );
}

export default Header;
