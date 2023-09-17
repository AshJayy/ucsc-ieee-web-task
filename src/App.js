import './App.css';
import ScrollAnimation from "react-animate-on-scroll";
import Header from './pages/Header';
import Hero from './pages/Hero';
import Intro from './pages/Intro';
import Timeline from './pages/Timeline';
import Footer from './pages/Footer';

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
        <Timeline />
        <Footer />
    </div>
  );
}

export default App;
