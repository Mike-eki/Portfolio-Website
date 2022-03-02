import './App.css';

import Navigation from './components/Navigation';
import Home from './components/Home';
import Services from './components/Services';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Navigation 
      nameItem1="About me" 
      nameItem2="Contacts" 
      nameItem3="Services"
      nameItem4="Projects" />
      <Home />
      <Projects/>
      <Services />
      <About />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
