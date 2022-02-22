import logo from './newLogo.svg';
import './App.css';

import Navigation from './components/Navigation.js';
import VideoBackground from './components/VideoBackground.js';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation 
      nameItem1="About me" 
      nameItem2="Contacts" 
      nameItem3="Services"
      nameItem4="Projects" />
      <VideoBackground />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
