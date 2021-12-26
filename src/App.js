import './App.css';
import {React, useState} from 'react'
import Navigation from './components/Navigation';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About'
import Resume from './components/Resume';
import Project from './components/Portfolio';

function App() {
  const [categories] = useState([
    {name: 'Portfolio'},
    {name: 'Resume'}
  ]);

  const [contactSelected, setContactSelected] = useState(false);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Navigation
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Navigation>
      <main>
        {!contactSelected ? (
          <>
          <Resume></Resume>
          <Portfolio></Portfolio>
          <About></About>
          </>
        ) : (
          <Contact></Contact>
        )}
      
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
