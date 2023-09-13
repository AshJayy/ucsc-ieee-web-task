import './App.css';
import Hero from './pages/Hero';

function App() {
  return (
    <div style={{backgroundImage:"url(/bg.jpg)", 
    backgroundSize:"cover",
    width: "100%"}}>
        <Hero />
    </div>
  );
}

export default App;
