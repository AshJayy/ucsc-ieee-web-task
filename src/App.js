import './App.css';
import Header from './pages/Header';
import Hero from './pages/Hero';
import Intro from './pages/Intro';
import ScrollAnimation from "react-animate-on-scroll";


function App() {
  return (
    <div style={{backgroundImage:"url(/bg.jpg)", 
    backgroundSize:"cover",
    width: "100%"}}>
        <Header />
        <Hero />
        <ScrollAnimation animateIn="animate__fadeIn" animateOut='animate__fadeOut'>
          <Intro />
        </ScrollAnimation>
    </div>
  );
}

export default App;
