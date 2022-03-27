import useObserver from './hooks/useObserver';
import React, {useEffect} from 'react';

import './App.css';

import Navigation from './components/Navigation';
import MobileNav from './components/MobileNav';
import Home from './components/Home';
import Services from './components/Services';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';

function App() {

  const [observer, setElements, entries] = useObserver({
    root: null,
    rootMargin: '0px',
    threshold: .2,
})

useEffect(function() {
    const animation = document.querySelectorAll('.animation');
    setElements(animation);
}, [setElements])

useEffect( () => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const elementToShow = entry.target;
            elementToShow.classList.add('show');
            observer.unobserve(elementToShow);
        }
    })
}, [observer, entries])

  return (
    <div className="App">
      <Navigation nameItem1="Home"
                  nameItem2="Projects"
                  nameItem3="Services"
                  nameItem4="About me"
                  nameItem5="Contact"/>
      <MobileNav />
      <Home />
      <Projects />
      <Services />
      <About />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
