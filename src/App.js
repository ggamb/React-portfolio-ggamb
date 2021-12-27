import './App.css';
import { React, useState } from 'react'
import Navigation from './components/Navigation';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About'
import Resume from './components/Resume';

function App() {
  const [currentPage, handlePageChange] = useState('About me')

  const renderPage = () => {
    switch (currentPage) {
      case 'About me' :
        return <About/>;
      case 'Contact':
        return <Contact />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Resume':
        return <Resume />;
    }
  }

  return (
    <div>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />

      <div>{renderPage(currentPage)}</div>
      <Footer></Footer>
    </div>
  );
}

export default App;
