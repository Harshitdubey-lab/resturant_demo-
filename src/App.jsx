import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Experience from './components/Experience';
import Cocktails from './components/Cocktails';
import ChefFeature from './components/ChefFeature';
import Gallery from './components/Gallery';
import Reservation from './components/Reservation';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      <Navbar isScrolled={isScrolled} />
      <Hero />
      <Ticker />
      <Experience />
      <Cocktails />
      <ChefFeature />
      <Gallery />
      <Reservation />
      <Footer />
    </div>
  );
}

export default App;
