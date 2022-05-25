import useObserver from './hooks/useObserver';
import {useEffect, Suspense, lazy} from 'react';

import './App.css';

import NormalNav from './components/NormalNav';
import MobileNav from './components/MobileNav';
import Home from './components/Home';
import Projects from './components/Projects';
import Services from './components/Services';
import About from './components/About';
import Contacts from './components/Contacts';

const Footer = lazy(() => import('./components/Footer'));

export default function App() {

  const [observer, setElements, entries] = useObserver({
    root: null,
    rootMargin: '0px',
    threshold: .2,
  })

  useEffect(function () {
    const animation = document.querySelectorAll('.animation');
    setElements(animation);
  }, [setElements])

  useEffect(() => {
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

      <NormalNav />
      <MobileNav />
      <Home />
      <Projects />
      <Services />
      <About />
      <Contacts />
      <Suspense fallback={<div>Cargando...</div>}>
        <Footer />
      </Suspense>

    </div>
  );
}
