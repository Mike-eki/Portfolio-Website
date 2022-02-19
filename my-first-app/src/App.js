import logo from './newLogo.svg';
import './App.css';

import Navigation from './components/Navigation.js';
import VideoBackground from './components/VideoBackground.js';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation nameItem1="Projects" nameItem2="Gallery" nameItem3="Contact me" />
      <VideoBackground />
      <Footer />
    </div>
  );
}

export default App;
