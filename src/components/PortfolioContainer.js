import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Resume';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import PortfolioFrontend from './pages/PortfolioFrontend';
import Contact from './pages/Contact';

const styles = {
  container: {
    background: '#EDF1FF',
    fontFamily:'Arial, Helvetica, sans-serif'
  }
}

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'Resume') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'PortfolioFrontend') {
      alert("testing");
      return <PortfolioFrontend />;
    }
    // return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div style={styles.container}>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
