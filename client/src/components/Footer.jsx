import React from 'react';
import '../styles/Footer.css';

const styles = {
  footer: {
    background: 'tan',
    fontSize: '14px',
    padding: '20px 0',
  },
  hr: {
    margin: '20px 0',
  },
  section: {
    marginBottom: '20px',
  },
};

function Footer() {
  return (
    <footer style={styles.footer} className="footer">
      <hr style={styles.hr} className="footer-seperator" />
      <div className="row">

        {/* Left Section */}
        <div className="col-md-4 text-center text-md-left" style={styles.section}>
          <img
            src="../../assets/main.png"
            alt="Logo"
            className="img-fluid mb-2"
          />
          <p className="small">
            <b>© 2024 Ctrl Alt Elite. All rights reserved.</b>
          </p>
        </div>

        {/* Contact Us Section */}
        <div className="col-md-3 text-center text-md-left" style={styles.section}>
          <h5><b>Contact Us</b></h5>
          <ul className="list-unstyled">
            <li>Email: <a href="mailto:info@company.com" className="text-white">info@company.com</a></li>
            <li>Phone: <a href="tel:+1234567890" className="text-white">+1 234 567 890</a></li>
            <li>Address: 123 Street, City, Country</li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="col-md-3 text-center text-md-left" style={styles.section}>
          <h5><b>Follow Us</b></h5>
          <a href="https://www.facebook.com/zuck/" className="text-white" target="_blank" rel="noopener noreferrer">Facebook</a> | 
          <a href="https://x.com/elonmusk" className="text-white" target="_blank" rel="noopener noreferrer">Twitter</a> | 
          <a href="https://www.instagram.com/zuck/" className="text-white" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>

        {/* Development Team Section */}
        <div className="col-md-2 text-center text-md-left" style={styles.section}>
          <h5><b>Development Team</b></h5>
          <ul className="list-unstyled">
            <li>Rosemarie Lupi: <a href="https://github.com/RML-png" className="text-white">RML-png</a></li>
            {/* <li>Mickey Darty: <a href="https://github.com/TilesTwenty" className="text-white">TilesTwenty</a></li> */}
            <li>Courtney Ponder: <a href="https://github.com/CourtneyPonder" className="text-white">CourtneyPonder</a></li>
            <li>Rosser Williams: <a href="https://github.com/rosserw" className="text-white">rosserw</a></li>
            <li>Sonu Singh: <a href="https://github.com/shoc71" className="text-white">shoc71</a></li>
          </ul>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
