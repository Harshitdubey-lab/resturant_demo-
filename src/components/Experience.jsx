import { motion } from 'framer-motion';

const experiences = [
  { title: 'Crafted Cocktails', img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=600' },
  { title: 'Fine Dining', img: '/experience_dining.png' },
  { title: 'Private Events', img: 'https://images.unsplash.com/photo-1560624052-449f5ddf0c31?auto=format&fit=crop&q=80&w=600' },
  { title: 'Night Lounge', img: 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&q=80&w=600' }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section section-padding">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">The Ember Experience</h2>
          <p className="section-subtitle">Curated for the senses</p>
        </div>
        
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <motion.div 
              className="exp-card" 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <img src={exp.img} alt={exp.title} className="exp-img" />
              <div className="exp-overlay">
                <h3 className="exp-title">{exp.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
