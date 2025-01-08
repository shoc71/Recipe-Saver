import '../styles/Footer.css';
import 'bootstrap/dist/css/bootstrap.css';

const styles = {
  footerStyle: {
    background: 'tan',
  },
  footerStyle: {
    backgroundColor: "tan",
    color: "white",
    borderTop: "1px solid #E7E7E7",
    
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
  },
};


function Footer() {
  return (
    <footer style={styles.footerStyle} className="footer">
      <h1 style={styles.footerStyle}>Recipe-Saver</h1>
      <div style={styles.footerStyle} className="row">
            <div style={styles.footerStyle} className="col-md-3 text-center text-md-left mb-3 mb-md-0">
                <img src="./assets/images/logospinnerrescaled.png" alt="Logo" className="img-fluid mb-2"/>
                <p style={styles.footerStyle} className="small"><b>© 2024 Ctrl Alt Elite. All rights reserved.</b></p>
            </div>
    
            <div style={styles.footerStyle} className="col-md-3 text-center text-md-left mb-3 mb-md-0">
                <h5 style={styles.footerStyle}><b>Contact Us</b></h5>
                <ul style={styles.footerStyle} className="list-unstyled">
                    <li>Email: <a href="mailto:info@company.com" class="text-white">info@company.com</a></li>
                    <li>Phone: <a href="tel:+1234567890" class="text-white">+1 234 567 890</a></li>
                    <li>Address: 123 Street, City, Country</li>
                </ul>
            </div>
    
            
            <div style={styles.footerStyle} className="col-md-3 text-center text-md-left">
                <h5 style={styles.footerStyle}><b>Follow Us</b></h5>
                <a href="https://www.facebook.com/zuck/"  target="_blank">Facebook</a> | 
                <a href="https://x.com/elonmusk" target="_blank">Twitter</a> | 
                <a href="https://www.instagram.com/zuck/" target="_blank">Instagram</a>
            </div>
            <div style={styles.footerStyle} className="col-md-3 text-center text-md-left">
                <h5><b>Development Team</b></h5>
                <ul style={styles.footerStyle} className="list-unstyled">
                    <li>Rosemarie Lupi: <a href="https://github.com/RML-png">RML-png</a></li>
                    <li>Mickey Darty: <a href="https://github.com/TilesTwenty">TilesTwenty</a></li>
                    <li>Courtney Ponder: <a href="https://github.com/CourtneyPonder">CourtneyPonder</a></li>
                    <li>Rosser Williams: <a href="https://github.com/rosserw">rosserw</a></li>
                    <li>Sonu Singh: <a href="https://github.com/shoc71">shoc71</a></li>
                </ul>
            </div>

        </div>
    </footer>
  );
}

export default Footer;