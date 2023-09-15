import './App.css';
import Hero from './pages/Hero';
import Intro from './pages/Intro';

function App() {
  return (
    <div style={{backgroundImage:"url(/bg.jpg)", 
    backgroundSize:"cover",
    width: "100%"}}>
        <Hero />
        <Intro />
    </div>
  );
}

export default App;
