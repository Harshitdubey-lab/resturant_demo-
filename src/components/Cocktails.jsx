import { motion } from 'framer-motion';

const cocktails = [
  { name: 'Smoked Old Fashioned', desc: 'Bourbon, house bitters, orange peel, hickory smoke', price: '$18' },
  { name: 'Midnight Espresso', desc: 'Vodka, fresh espresso, coffee liqueur, vanilla bean', price: '$16' },
  { name: 'Golden Margarita', desc: 'Reposado tequila, grand marnier, agave, lime, gold salt', price: '$19' },
  { name: 'The Botanist', desc: 'Gin, elderflower, cucumber, mint, sparkling water', price: '$17' }
];

const Cocktails = () => {
  return (
    <section id="menu" className="cocktails-section section-padding">
      <div className="container">
        <div className="cocktail-grid">
          <div className="cocktail-text-wrapper">
            <h2 className="section-title">Signature Cocktails</h2>
            <p className="section-subtitle" style={{ color: 'var(--color-off-white)' }}>Masterfully mixed.</p>
            
            <div className="cocktail-list">
              {cocktails.map((drink, index) => (
                <motion.div 
                  className="cocktail-item" 
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="cocktail-info">
                    <h3 className="cocktail-name">{drink.name}</h3>
                    <p className="cocktail-desc">{drink.desc}</p>
                  </div>
                  <div className="cocktail-price">{drink.price}</div>
                </motion.div>
              ))}
            </div>
            
            <button className="btn-outline" style={{ marginTop: '2rem' }}>View Full Menu</button>
          </div>
          
          <motion.div 
            className="cocktail-image-wrapper"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src="/cocktail_1.png" alt="Signature Cocktail" className="cocktail-img" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
