import logo from './newLogo.svg';
import './App.css';

import Navigation from './components/Navigation.js';
import Video from './components/Video.js';

function App() {
  return (
    <div className="App">
      <Navigation nameItem="Contact me" />
      <Video />
    </div>
  );
}

export default App;
