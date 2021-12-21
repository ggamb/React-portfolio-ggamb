import './App.css';
import {React, useState} from 'react'
import Navigation from './components/Navigation';
import Header from './components/Header';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About'

function App() {
  const [categories] = useState([
    {name: 'About me'},
    {name: 'Portfolio'},
    {name: 'Contact'},
    {name: 'Resume'}
  ]);

  const [contactSelected, setContactSelected] = useState(false);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Header></Header>
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
            <About></About>
            <Project currentCategory={currentCategory}></Project>
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
