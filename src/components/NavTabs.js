import React from 'react';
const styles = {
  navBar: {
    background: 'green',
    display:'flex',
    padding:'20px',
    flexDirection:'row',
    justifyContent: 'flex-end',
  },
  li:{
    listStyle:'none',
    padding:'20px'
  },
  a:{
    textDecoration:'none'
  }
}
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul style={styles.navBar} className="nav nav-tabs">
      <li style={styles.li} className="nav-item">
        <a style={styles.a}
          href="#home"
          onClick={() => handlePageChange('Home')}

          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li style={styles.li} className="nav-item">
        <a style={styles.a}
          href="#about"
          onClick={() => handlePageChange('About')}
          
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li style={styles.li} className="nav-item">
        <a style={styles.a}
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li style={styles.li} className="nav-item">
        <a style={styles.a}
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li style={styles.li} className="nav-item">
        <a style={styles.a}
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
