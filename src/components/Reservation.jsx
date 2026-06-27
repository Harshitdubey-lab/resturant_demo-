import { motion } from 'framer-motion';

const Reservation = () => {
  return (
    <section id="reservation" className="reservation-section section-padding">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Reserve a Table</h2>
          <p className="section-subtitle">Join us for an unforgettable experience</p>
        </div>
        
        <motion.div 
          className="reservation-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <form className="res-form" onSubmit={(e) => e.preventDefault()}>
            <div className="res-form-group">
              <input type="text" placeholder="Full Name" className="res-input" required />
            </div>
            <div className="res-form-group">
              <input type="tel" placeholder="Phone Number" className="res-input" required />
            </div>
            <div className="res-form-group">
              <input type="date" className="res-input" required />
            </div>
            <div className="res-form-group">
              <input type="time" className="res-input" required />
            </div>
            <div className="res-form-group full">
              <select className="res-input" required>
                <option value="" disabled selected>Number of Guests</option>
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
                <option value="5">5 People</option>
                <option value="6+">6+ People</option>
              </select>
            </div>
            <div className="res-form-group full">
              <textarea placeholder="Special Requests (Optional)" className="res-input"></textarea>
            </div>
            <div className="res-form-group full">
              <button type="submit" className="btn-primary res-submit">Confirm Reservation</button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Reservation;
