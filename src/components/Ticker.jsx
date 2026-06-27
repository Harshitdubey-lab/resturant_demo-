import { motion } from 'framer-motion';

const Ticker = () => {
  return (
    <div className="ticker-wrap">
      <motion.div 
        className="ticker-content"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
      >
        Now open for dinner reservations &bull; Live music every weekend &bull; Signature cocktails available tonight &bull; Now open for dinner reservations &bull; Live music every weekend &bull; Signature cocktails available tonight &bull; Now open for dinner reservations &bull; Live music every weekend &bull; Signature cocktails available tonight
      </motion.div>
    </div>
  );
};

export default Ticker;
