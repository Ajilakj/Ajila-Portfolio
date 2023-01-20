import React from 'react';
const styles = {
  navBarContainer:{
    padding:'10px',
    background: '#004B8D',
    color:'beige',
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
},
  navBar: {
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
    textDecoration:'none',
    color:'beige',
  }
}
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <>
    <header style={styles.navBarContainer}>
    <h1>Ajila's Portfolio</h1>
    <ul style={styles.navBar} className="nav nav-tabs">
      <li style={styles.li} className="nav-item">
        <a style={styles.a}
          href="#about"
          onClick={() => handlePageChange('About')}
          
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About Me
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
    </header>
    </>
  );
}

export default NavTabs;
