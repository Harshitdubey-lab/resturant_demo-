import { motion } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&q=80&w=800'
];

const Gallery = () => {
  return (
    <section id="gallery" className="gallery-section section-padding">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title" style={{ color: 'var(--color-white)' }}>Gallery</h2>
          <p className="section-subtitle">A glimpse into Ember</p>
        </div>
        
        <div className="gallery-grid">
          {images.map((src, index) => (
            <motion.div 
              className="gallery-wrapper" 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={src} alt={`Gallery image ${index + 1}`} className="gallery-item" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
