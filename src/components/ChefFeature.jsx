import { motion } from 'framer-motion';

const ChefFeature = () => {
  return (
    <section className="chef-feature">
      <img src="/chef_feature.png" alt="Chef preparing food" className="chef-img" />
      <div className="chef-overlay"></div>
      
      <motion.div 
        className="container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="chef-text">Made with passion,<br />served with style.</h2>
      </motion.div>
    </section>
  );
};

export default ChefFeature;
