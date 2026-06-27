import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3 className="footer-brand">EMBER</h3>
            <p className="footer-text">
              Experience fine dining, crafted cocktails, and unforgettable evenings in a modern luxury setting.
            </p>
            <div className="footer-social">
              <a href="#" className="social-icon">IG</a>
              <a href="#" className="social-icon">FB</a>
              <a href="#" className="social-icon">X</a>
            </div>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-title">Contact</h4>
            <a href="#" className="footer-text" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <MapPin size={16} /> 123 Luxury Avenue, NY 10001
            </a>
            <a href="tel:+1234567890" className="footer-text" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Phone size={16} /> +1 (234) 567-890
            </a>
            <a href="mailto:reservations@ember.com" className="footer-text" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Mail size={16} /> reservations@ember.com
            </a>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-title">Hours</h4>
            <p className="footer-text"><strong>Mon - Wed:</strong> 5:00 PM - 11:00 PM</p>
            <p className="footer-text"><strong>Thu - Sat:</strong> 5:00 PM - 2:00 AM</p>
            <p className="footer-text"><strong>Sunday:</strong> 4:00 PM - 10:00 PM</p>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-title">Quick Links</h4>
            <a href="#home" className="footer-link">Home</a>
            <a href="#experience" className="footer-link">Experience</a>
            <a href="#menu" className="footer-link">Menu</a>
            <a href="#reservation" className="footer-link">Reservations</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} EMBER Restaurant & Bar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
