import './App.css';
import {React, useState} from 'react'
import Navigation from './components/Navigation';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About'

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
      <About></About>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
