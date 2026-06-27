import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <img src="/hero_bg.png" alt="Ember Restaurant Interior" className="hero-bg" />
      <div className="hero-overlay"></div>
      
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h1 className="hero-title">Reserve Your Table</h1>
        <p className="hero-subtitle">Experience fine dining, crafted cocktails, and unforgettable evenings.</p>
        <button 
          className="btn-primary" 
          onClick={() => document.getElementById('reservation').scrollIntoView()}
          style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}
        >
          Book Now
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
